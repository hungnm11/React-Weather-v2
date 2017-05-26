import {REST_API, PROXY_URL} from './rest-endpoint';

const env = 'local';
let $fetch;

export const METHOD = {
  get: 'GET',
  post: 'POST'
};

const access_key = 'e1f4fca3b8af6f3daccf60d38fbb93f6';

if (env === 'local') {
  $fetch = require('./fetch-demo').default;
} else if(env === 'developement') {
  $fetch = (endpoint, params, method = METHOD.get) => {
    const uri = PROXY_URL + REST_API + endpoint + '/' + access_key + '/' + params.location.latitude + ',' + params.location.longitude;
    console.log('DEV',Object.keys(params).length == 0 ? uri : uri + `/${paramsToQuery(params)}`);
    let requestPromise = null;

    switch (method) {
      case METHOD.post:
        requestPromise = fetch(uri, {
          method,
          headers: new Headers(),
          body: JSON.stringify(params)
        });
        break;
      case METHOD.get:
      default:
        // requestPromise = fetch(uri + (params ? `?${paramsToQuery(params)}` : ''));
        requestPromise = fetch(Object.keys(params).length == 0 ? uri : uri + `/${paramsToQuery(params)}`);
        break;
    }

    const fetchData = requestPromise.then(response => response.json());
    return fetchData;

  };
}

function paramsToQuery(params) {
  if (params.location) {
    delete params.location;
  }
  return Object
    .keys(params)
    .map(key => `${params[key]}`)
    .join('/');
}

export default $fetch;