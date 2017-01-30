/**
 * Created by muduna on 1/10/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';

import * as Actions from './actions'
import Login from '../../components/Login';

class Welcome extends Component {
  constructor(props){
      super(props);
      this.authenticate = this.authenticate.bind(this);
  }

  authenticate( user ){
      this.props.authenticate( user );
      browserHistory.push('/getStarted');
  }

  render(){
      return(
          <Login authenticate={this.authenticate}/>
      )
  }
}

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome);