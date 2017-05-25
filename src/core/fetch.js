import {REST_API, REST_API_DEMO} from './rest-endpoint';

const env = 'developement';
let $fetch;

export const METHOD = {
  get: 'GET',
  post: 'POST'
};

const access_key = '8022563e2a9c56e7e4ffb23f2b1e00f0';

if (env === 'local') {
  $fetch = require('./fetch-demo').default;
} else if(env === 'developement') {
  $fetch = (endpoint, params, method = METHOD.get) => {
    const uri = REST_API + endpoint + '&APPID=' + access_key;
    console.log('TEST',Object.keys(params).length == 0 ? uri : uri + `&${paramsToQuery(params)}`);
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
        requestPromise = fetch(Object.keys(params).length == 0 ? uri : uri + `&${paramsToQuery(params)}`);
        break;
    }

    const fetchData = requestPromise.then(res => res.json());
    return fetchData;

  };
}

function paramsToQuery(params) {
  return Object
    .keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
}

export default $fetch;