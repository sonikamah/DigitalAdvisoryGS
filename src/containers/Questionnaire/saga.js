/**
 * Created by jainpri on 1/5/2017.
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actionTypes from './constants';
import getQuestionsList from './api';

export function* getQuestionsSaga() {
    try {
        let data = yield call(getQuestionsList);
        yield [
            put({ type: actionTypes.GET_QUESTIONS_SAGA_SUCCESS, questions: data}),
        ];
    } catch (error) {
       yield put({ type: actionTypes.GET_QUESTIONS_SAGA_ERROR, questions: error });
    }
}

export default function* rootSaga() {
    yield takeLatest(actionTypes.GET_QUESTIONS_SAGA, getQuestionsSaga);
}