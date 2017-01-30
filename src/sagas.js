/**
 * Created by muduna on 1/10/2017.
 */
import {fork} from 'redux-saga/effects';

import authWatcher from './containers/Welcome/saga';
import getQuestionsWatcher from './containers/Questionnaire/saga';
import getProposalWatcher from './containers/Proposal/saga';

export default function* startForman() {
  yield fork(authWatcher);
  yield fork(getQuestionsWatcher);
  yield fork(getProposalWatcher);
}