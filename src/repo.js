import $fetch from './core/fetch';
import { ENDPOINT } from './core/rest-endpoint';

export function _getData(params = {}) {
  return $fetch(ENDPOINT, params);
}
