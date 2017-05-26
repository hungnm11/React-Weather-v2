import { REST_API_LOCAL } from './rest-endpoint';

function requestJSON(endpoint, params) {
  const localhost = REST_API_LOCAL + endpoint;
  let delay = 2000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('REST LOCAL',Object.keys(params).length == 0 ? localhost : localhost + `/${paramsToQuery(params)}`);
      fetch(Object.keys(params).length == 0 ? localhost : localhost + `/${paramsToQuery(params)}`, {
        // method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(data => {
        return data.json().then(json => resolve(json[0]));
      }, reject);
    }, delay);
  });
}

function paramsToQuery(params) {
  return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}

export default function $fetch(endpoint, params = {}) {
  switch(endpoint) {
    case '/forecast':
      return requestJSON('/forecast', params);
    default:
     throw new Error(`unknown demo setup for ${endpoint}`);
  }
}
