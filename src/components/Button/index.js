import React from 'react';


    class Button extends React.Component{
        render(){
            const {containerClass, styleClass, clickHandler, disabled, label} = this.props;
            return (
                <div className={containerClass}>
                    <button className={"btn btn-default " + styleClass} onClick={clickHandler} disabled={disabled}>
                        {label}
                    </button>
                </div>
            )
        }
    }


export default Button;

