/**
 * Created by muduna on 1/10/2017.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux'

class Header extends Component {

  render(){
      let {user} = this.props;
      return(
          <div className="header">
              <div className="header__logo"></div>
              { user.fullName ? <div className="header__userName"><h3>Welcome {user.fullName}</h3></div> : <span></span>}
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(
  mapStateToProps
)(Header);