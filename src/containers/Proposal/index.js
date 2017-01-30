/**
 * Created by jainpri on 1/5/2017.
 */

import React, {  Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import {bindActionCreators} from 'redux'
import Chart from '../../components/Charts';
import Config from './config.js';
import Slider from 'rc-slider';
import '../../../node_modules/rc-slider/assets/index.css';

class Proposal extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.checkStategy = this.checkStategy.bind(this);
        this.state = {
           slideInput: "",
           strategy: ""
        }
    }
    
    handleChange(value){
        this.setState({"slideInput": value});
        var strategy = this.checkStategy("name",value);
        this.setState({"strategy": strategy});
    }

    checkStategy(key, value){
        var list = this.props.proposal.strategy,
        strategy;
        if(list){
               strategy = list.filter(function( elem ){
               if(elem[key] == value){
                  return elem
               }
            })
        }
      return strategy;
    }
    componentWillReceiveProps(){
      var preferredStrategy = "";
      preferredStrategy = this.checkStategy("preferred","yes");
      if(preferredStrategy){
          this.setState({"strategy": preferredStrategy});
      }
    }

    componentDidMount() {
        this.props.getProposal(this.props.userResponse);
    }

    render() {
        const {proposal} = this.props;
        if(proposal.data){
            let chartConfig = Object.assign({},Config,proposal.data);
            const marks = {
              1: {
                style:{
                  color: 'black',
                  paddingTop: '5px'
                },
                label: <strong>Low</strong>
              },
              2: {
                style:{
                  color: 'black',
                  paddingTop: '5px'
                },
                label: <strong>Moderate</strong>
              },
              3: {
                style:{
                  color: 'black',
                  paddingTop: '5px'
                },
                label: <strong>High</strong>
              }
            };
            return (
                <div>
                  <div className="sliderBox">
                      <Slider min={1} max={3} marks={marks} included={false} defaultValue={3} onChange={this.handleChange} />
                  </div>
                  {this.state.strategy ?
                  <div className="slideResult">
                      <div className="title"> {this.state.strategy.title}</div>
                      <div className="stocks displayBlock">{this.state.strategy.stocks}</div>
                  </div> :''}
                  <div className="chart-wrapper">
                    <Chart container="chart-container" options={chartConfig} type="Chart"></Chart>
                  </div>
                </div>
            );
        }else{
           return false;
        }
    }
}

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = (state) => ({
    userResponse: state.userResponse,
    proposal: state.proposal
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}

// connect method from react-router connects the component with redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Proposal);