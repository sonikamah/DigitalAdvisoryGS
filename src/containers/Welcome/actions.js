/**
 * Created by muduna on 1/10/2017.
 */

import * as actionTypes from './constants';

export function authenticate( user ) {
  return {
    type: actionTypes.WELCOME_SAGA,
    user
  }
}
