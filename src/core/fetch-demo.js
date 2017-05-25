
function requestJSON(uri, params) {
  let delay = 2000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(params ? `${uri}?${paramsToQuery(params)}` : uri, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(data => {
        return data.json().then(json => resolve(json));
      }, reject);
    }, delay);
  });
}

function paramsToQuery(params) {
  return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}

export default function $fetch(uri, params = {}) {
  switch(uri) {
    case '/data/2.5/forecast?id=524901':
      return requestJSON('/forecast.json', params);
    default:
     throw new Error(`unknown demo setup for ${uri}`);
  }
}

