/**
 * Created by jainpri on 1/11/2017.
 */
import React,{Component} from 'react';
import * as constants from './constants';
import update from 'react-addons-update';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: {
        username: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( event ){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var updatedErrors = update(this.state,{
      error:{
        username:{$set: this.state.username ? '' : constants.ERROR_MSG.username},
        password:{$set: this.state.password ? '' : constants.ERROR_MSG.password}
      }
    })
    this.setState(updatedErrors);
    
    if( this.state.username && this.state.password){
      this.props.authenticate({
        username: this.state.username,
        password: this.state.password
      });
    }
  }
  render() {
      return (
          <div className="login-container">
              <div className="loginRow-spacing row">
                  <div className="col-md-offset-8 col-md-3">
                      <form onSubmit={this.handleSubmit}>
                          <div className="form-login">
                              <h4>{constants.HEADING}</h4>
                              <input type="text" className="form-control input-sm chat-input" placeholder="username" name="username"
                                     value={this.state.username} onChange={this.handleChange}/>
                              <p className="error-message">{this.state.error.username}</p>
                              <br></br>
                              <input type="password" className="form-control input-sm chat-input" placeholder="password"
                                     name="password" value={this.state.password} onChange={this.handleChange}/>
                              <p className="error-message">{this.state.error.password}</p>
                              <br></br>
                              <div className="wrapper">
                                  <span className="group-btn">
                                      <button type="submit" value="Submit" className="btn btn-lg btn-primary">{constants.LOGIN}</button> <i
                                    className="fa fa-sign-in"></i>
                                  </span>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      );
  }
}

export default Login;
