/**
 * Created by muduna on 1/10/2017.
 */
import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';
import { Router, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import App from './containers/App';
import Welcome from './containers/Welcome';
import GetStarted from './containers/GetStarted';
import Questionnaire from './containers/Questionnaire';
import Proposal from './containers/Proposal';
import NotFound from './containers/NotFound';

const routes = ( {requireAuth} ) => (

     <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="getStarted" component={GetStarted} onEnter={requireAuth} />
        <Route path="questionnaire" component={Questionnaire} onEnter={requireAuth}/>
        <Route path="proposal" component={Proposal} onEnter={requireAuth}/>
        <Route path="*" component={NotFound} />
     </Route>
);

export default routes;
/*
class DefaultRouter extends Component{

    requireAuth(nextState, replace){
        if(!this.props.routeState.user.isAuthenticated){
          //pass on info to where the user was going to in a new prop nextPathname
          replace({pathname:'/', state:{nextPathname:nextState.location.pathname}})
        }
        return true;
    }
    render(){
      return (
        <Router history={browserHistory} >
            <Route path="/" component={App}>
              <IndexRoute component={Welcome} />
              <Route path="getStarted" component={GetStarted} onEnter={this.requireAuth} />
              <Route path="questionnaire" component={Questionnaire} onEnter={this.requireAuth}/>
              <Route path="proposal" component={Proposal} onEnter={this.requireAuth}/>
              <Route path="*" component={NotFound} />
            </Route>
        </Router>
      );
    }
}

const mapStateToProps = (state) => ({
    routeState: state
});

export default connect(
    mapStateToProps
)(DefaultRouter);*/
