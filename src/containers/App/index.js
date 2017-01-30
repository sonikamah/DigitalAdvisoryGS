/**
 * Created by muduna on 1/10/2017.
 */
import React, { Component, PropTypes } from 'react';


import Header from '../../components/Header';
import '../../stylesheets/main.scss';

class App extends Component {
  render(){
    return(
      <div className="parent-container gm-align_center">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;