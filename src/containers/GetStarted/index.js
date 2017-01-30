/**
 * Created by muduna on 1/10/2017.
 */


import React, { Component, PropTypes } from 'react';
import * as constants from './constants';

import {browserHistory} from 'react-router';

class GetStarted extends Component {
    render(){
        const {label, title, subHeading, clickHandler} = this.props;
        return (
            <div className="home-container">
                <div className="displayBox">
                    <h1 className="displayBox__row">{title}</h1>
                    <h3 className="displayBox__row">{subHeading}</h3>
                    <button className="btn btn-default"  onClick={clickHandler} >
                      {label}
                    </button>
                </div>
            </div>
        );
    }
}

GetStarted.defaultProps= {
  label: constants.LABEL,
  title: constants.TITLE,
  subHeading: constants.SUB_HEADING,
  clickHandler: function(e){ browserHistory.push('/questionnaire');}
}


export default GetStarted;