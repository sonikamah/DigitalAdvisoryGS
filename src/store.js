/**
 * Created by muduna on 1/10/2017.
 */

import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import reducer from './reducers';
import rootSaga from './sagas';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}


