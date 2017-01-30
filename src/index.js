import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
//import routes from './routes';
import configureStore from './store';
import initialState from './config';
import { Router, browserHistory } from 'react-router';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Welcome from './containers/Welcome';
import GetStarted from './containers/GetStarted';
import Questionnaire from './containers/Questionnaire';
import Proposal from './containers/Proposal';
import NotFound from './containers/NotFound';

const store = configureStore(initialState);

function requireAuth(nextState, replace){
 /* if(!store.getState().user.isAuthenticated){
    //pass on info to where the user was going to in a new prop nextPathname
    replace({pathname:'/', state:{nextPathname:nextState.location.pathname}})
  }*/
  return true;
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} >
       <IndexRoute component={Welcome} />
        <Route path="getStarted" component={GetStarted} onEnter={requireAuth} />
        <Route path="questionnaire" component={Questionnaire} onEnter={requireAuth}/>
        <Route path="proposal" component={Proposal} onEnter={requireAuth}/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
