/**
 * Created by jainpri on 1/5/2017.
 */

import createReducer from '../../utils/createReducer';
import {fromJS} from 'immutable';
import { combineReducers } from 'redux';

const initialState = fromJS({
  userResponse: {},
  isAuth: false,
  list: []
});


function getQuestionsSuccess(state , action) {
  console.log(action);
  return Object.assign({},state, action.questions);
}
function getQuestionsFailure(state, action) {
  return Object.assign({}, state, action.questions);
}

function sendUserResponse(state, action) {
  return Object.assign({},state, action.userResponse);
}

export const questionnaireReducer = createReducer([], {
  'Questionnaire/GET_QUESTIONS_SAGA_ERROR': getQuestionsFailure,
  'Questionnaire/GET_QUESTIONS_SAGA_SUCCESS': getQuestionsSuccess,
});

export const userResponseReducer = createReducer([], {
  'Questionnaire/SEND_USER_RESPONSE': sendUserResponse
});



