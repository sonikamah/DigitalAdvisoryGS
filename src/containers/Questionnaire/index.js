/**
 * Created by jainpri on 1/5/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import update from 'react-addons-update';

import * as Actions from './actions';
import Slide from '../../components/Slides';

class Questions extends Component {
    constructor( props ) {
        super( props );
        this.updateState = this.updateState.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
        this.goToProposal = this.goToProposal.bind(this);
        this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
        this.state = {
            "userResponse": {},
            "currentQuestion": 0,
            "errorResponse": ""
        }
    }

    componentDidMount() {
        //fetchData from API
        this.props.getQuestions();
    }

    shouldComponentUpdate( nextProps ) {
        return true;
    }

    updateState( action, data){
        if(action === 'next'){
            this.nextSlide(data);
        }else if(action === 'prev'){
            this.prevSlide();
        }else if(action === 'message'){
            this.displayMessage(data.message, data.value);
        }
    }

    nextSlide( data ){
        var response = update(this.state,{
          userResponse:{
             [data.name]:{$set: data.value}
          }
        })
        this.setState(response);
        if(!this.reachedLastQuestion()){
            this.setState({"errorResponse": ""});
            setTimeout(this.setCurrentQuestion,800);
        }
    }
  setCurrentQuestion(){
    this.setState({"currentQuestion": (this.state.currentQuestion + 1)})
  }

    goToProposal(){
        this.props.sendUserResponse( this.state.userResponse );
        setTimeout( browserHistory .push('/proposal'), 1000);
    }
  
    prevSlide(){
      this.setState({"currentQuestion": (this.state.currentQuestion - 1)});
    }

    displayMessage( msg ){
        this.setState({"errorResponse": msg});
        this.nextSlide();
    }

    reachedLastQuestion(){
        let currentQuestion  = this.state.currentQuestion,
            noOfQuestions = this.props.dataMap.list.length;

        return (currentQuestion == (noOfQuestions - 1) );
    }

    render() {
        let { dataMap } = this.props;
        if(dataMap.list && dataMap.list.length > 0) {
            return (
                <div className="questions-container">
                    <div className="slide">
                        {
                            <div className="slide__content" key={this.state.currentQuestion}>
                                <ReactCSSTransitionGroup transitionName="question"
                                                         transitionEnterTimeout={500}
                                                         transitionLeaveTimeout={500}>
                                    <Slide data={dataMap.list}
                                           updateState={this.updateState}
                                           current={this.state.currentQuestion}
                                           userResponse={this.state.userResponse}
                                           saveUserResponse={this.goToProposal}
                                    />
                                </ReactCSSTransitionGroup>
                            </div>
                        }
                    </div>
                </div>
            );
        }else{
            return (<div>Loading ......</div>)
        }
    }
}
// Define PropTypes
/*Questions.propTypes = {
    //dispatch: PropTypes.func.isRequired
};*/

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = (state) => ({
    dataMap: state.questions

});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);