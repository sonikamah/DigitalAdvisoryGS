/**
 * Created by muduna on 1/10/2017.
 */

import createReducer from '../../utils/createReducer';

function welcomeSagaSuccess(state, action) {
  return Object.assign( {}, state, action.user);
}
function welcomeSageFailure(state, action) {
  return [...state, action.user]
}

const welcomeReducer = createReducer([], {
  'Welcome/WELCOME_SAGA_ERROR': welcomeSageFailure,
  'Welcome/WELCOME_SAGA_SUCCESS': welcomeSagaSuccess
});

export default welcomeReducer;
