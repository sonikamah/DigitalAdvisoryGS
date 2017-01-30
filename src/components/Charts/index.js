/**
 * Created by jainpri on 1/5/2017.
 */

import React, { PropTypes, Component } from 'react';
import Highcharts from 'highcharts';

class Chart extends Component {
    constructor(props) {
        super(props);
        //this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        //extends Highcharts with modules
        if(this.props.modules){
            this.props.modules.forEach(function(module){
                module(Highcharts);
            })
        }
        //set container which the chart should render to

        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            this.props.options
        );
    }
    componentWillReceiveProps(){
       console.log("props received")
      this.chart = new Highcharts[this.props.type || "Chart"](
        this.props.container,
        this.props.options
      );
    }
    ShouldComponentUpdate(){
        //re-render only if data changes
        return true;
    }

    componentWillUnmount(){
        this.chart.destroy();
    }

    render() {
        const { container } = this.props;
        return (
            <div id={container}></div>
        );
    }
}
// Define PropTypes
Chart.propTypes = {
    //dispatch: PropTypes.func.isRequired
};

// connect method from react-router connects the component with redux store
export default Chart;