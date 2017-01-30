/**
 * Created by jainpri on 1/5/2017.
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './constants';
import getProposal from './api';

export function* getProposalSaga() {
  try {
    let data = yield call(getProposal);
    console.log("proposal saga > data >>",data)
    yield [
      put({ type: actionTypes.GET_PROPOSAL_SAGA_SUCCESS, proposal: data}),
    ];
  } catch (error) {
    yield put({ type: actionTypes.GET_PROPOSAL_SAGA_ERROR, proposal: error });
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_PROPOSAL_SAGA, getProposalSaga);
}