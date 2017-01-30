/**
 * Created by muduna on 1/10/2017.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actionTypes from './constants';
import authenticate from './api'

export function* checkAuthentication( user ) {
  console.log("checkAuthentication saga started",user)
  try{
      let userData = yield call(authenticate,user);
      yield put({type: actionTypes.WELCOME_SAGA_SUCCESS, user: userData});
  }catch( error ){
      yield put({ type: actionTypes.WELCOME_SAGA_ERROR, user: error });
  }
}

export default function* rootSaga() {
  console.log("welcome saga started");
  yield takeLatest(actionTypes.WELCOME_SAGA, checkAuthentication);
}

