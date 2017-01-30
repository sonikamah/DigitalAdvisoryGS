/**
 * Created by jainpri on 1/9/2017.
 */

import React from 'react';

class Slide extends React.Component {

    constructor(props){
        super(props);
        this.renderOptions = this.renderOptions.bind(this);
    }

    renderOptions( question ){
        if(question.options.type === "radio"){
            return (
                this.renderRadios(question)
            )
        }else if(question.options.type === "scale"){
            return(
                <div>scale</div>
            );
        }
    }
    renderRadios( question ){
        return (
            question.options.values.map( (option, i) =>
                (
                <div className="options__container" key={i}>
                    <div key={i} >

                        <input name={question.options.name} id={option.name} type={question.options.type}
                               className="input-radio" value={option.name}
                               onClick = {() => this.props.updateState(option.action, {"name": question.options.name, "value": option.name })}/>
                        <label htmlFor={option.name} className={"option-button "+ (this.props.userResponse[question.options.name] == option.name ?"option-button__selected":"")}>
                            <div className={option.image} ></div>
                            <span>{option.label}</span>
                        </label>
                    </div>
                    <div className={this.props.userResponse[question.options.name] === option.name ?"icon-checkMark":""}></div>
                </div>
                )
            )
        )
    }

    render(){
        let {data, updateState, current, userResponse, saveUserResponse} = this.props;
        let question = data[current];
        return (
            <div className="content">
                <div className="content__header">
                    <div className={current!=0 ? "prev": ""} onClick={() => updateState('prev')}></div>
                    <div className="steps">Step {current + 1} of {data.length} </div>
                </div>

                <div className="content__title">{question.title}</div>
                <div className="options"> { this.renderOptions( question ) } </div>

                {current+1 == data.length ?
                <div className="content__button"><button className="btn btn-default"  onClick={saveUserResponse} >
                  {"Get My Proposal"}
                </button></div>
                  :""}
            </div>
        )
    }
}

    export default Slide;

