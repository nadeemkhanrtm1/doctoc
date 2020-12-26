import React, { Component } from 'react';
import Logo from "../../images/logo.png";
import david from "../../images/david.jpg";
import {connect} from 'react-redux';
import {loginAct,logoutAct} from '../../store/actions/authActions';
import {updateProfile} from '../../store/actions/profileActions';
import { Link } from 'react-router-dom';

class Navbar extends Component {

handleLogout = () => { 
  this.props.logout();
  //console.log(this.props);
  //this.props.history.push("/");
}

render(){ 
  const p = {
    fontFamily: 'Playfair Display',
    fontSize: '0.9rem',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#19193E',
  }
  return (
    <header>
      <nav className="nav_bar">
        <div className="logo_items">
          <img src={Logo}></img>
          <Link to="/home" className="link">HOME</Link>
          <Link to="/profile" className="link">PROFILE</Link>
          <Link to="/schedule" className="link">SCHEDULE APPOINTMENTS</Link>
        </div>
        <div className="profile_nav">
          <a style={p}>Hello!<br/>
            {this.props.profile.firstName} {this.props.profile.lastName}<br/>
            <Link className="btn p-0 m-0 logoutbtn" onClick={this.handleLogout} to="/">LOG OUT</Link></a>
          <img src={david}></img>
        </div>
      </nav>
    </header>
  )
}
}
const mapStateToProps = (state) =>{
  return{
      auth : state.auth,
      profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    logout: (authData) => dispatch(logoutAct(authData)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
