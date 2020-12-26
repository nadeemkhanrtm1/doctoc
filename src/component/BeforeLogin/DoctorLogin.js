import React, { Component } from 'react';
//import Cookies from 'universal-cookie';
import {Auth} from "aws-amplify";
import signup from '../../BeforeLogInImages/signupimg.png';
import {connect} from 'react-redux';
import {loginAct,logoutAct} from '../../store/actions/authActions';
import {updateProfile} from '../../store/actions/profileActions';
import {updateMedData} from '../../store/actions/medDataActions';
import config from "../../config.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import Amplify from "aws-amplify";

// Amplify.configure({
//     Auth:{
//         mandatotySignIn: true,
//         region : config.cognito2.REGION,
//         userPoolId : config.cognito2.USER_POOL_ID,
//         userPoolWebClientId : config.cognito2.APP_CLIENT_ID
//     }
//   });
// //const cookies = new Cookies();


class DoctorLogin extends Component {
  state = {
    username: "",
    password: "",
    errorState: false,
    error: ""
  };


  componentDidMount = () =>{
    Amplify.configure({
      Auth:{
          mandatotySignIn: true,
          region : config.cognito2.REGION,
          userPoolId : config.cognito2.USER_POOL_ID,
          userPoolWebClientId : config.cognito2.APP_CLIENT_ID
      }
    });    
  }

  handleSubmit = async event => {
    event.preventDefault();
    // AWS Cognito integration here
    console.log("inside submit");
    try{
      const user = await Auth.signIn(
        this.state.username,
        this.state.password
      );
      console.log(user);
      console.log(this.props);
      //console.log("user",user.attributes);
      let userInfo = JSON.parse(JSON.stringify(user.attributes).split('custom:').join(''));
      //console.log("user",userInfo);
      const userData = await axios.get(`${config.api.invokeUrl}/doctors/${userInfo.doctorId}`);
      const medData = await axios.get(`${config.api.medDataInvokeUrl}/meddata/${userInfo.doctorId}`);
      //console.log("user",userData.data);
      //Redux Login
      try {
        this.props.logIn(userInfo);
        this.props.updateProfile(userData.data);
        this.props.updateMedData(medData.data);
      }catch(e){
          console.log(e);
      }
      //console.log("after",this.props);
      this.props.history.push("/home");
    }catch(error){ 
      console.log("Error:",error);
      this.setState({
        errorState:  true
      })
      this.setState({
        error: error.message
      })
      window.scrollTo(0, 0);
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    //console.log(this.props);
    return (
      <React.Fragment>
      <Navbar/>
     {/***********************<!-- ================ contact section start ================= -->********************/}
    <section class="contact-section section_padding">
        <div class="container">
            <div class="d-none d-sm-block mb-5 pb-4">
 
                 <div class="row">
                     <div class="col-12">
                        <br/><br/>
                        <h2 class="contact-title">Start your journey with Idoctoc</h2>
                        <br/><br/>
                        {/* <div class="row">
                            <div class="col-2">
                                <a class="btn_2 d-none d-lg-block"  href="/login">Login</a>
                            </div>
                            <div class="col-2">
                                <a class="btn_2 d-none d-lg-block"  href="/register">Signup</a>
                            </div>
                            
                        </div>
                        <br/><br/><br/><br/> */}
                    </div>  
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate" onSubmit={this.handleSubmit}>
                        {this.state.errorState ? (
                                <div className="row">
                                  <div className="col-sm-12" class="errorDiv">{this.state.error}</div>
                                </div>
                              ): null}  
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                    <input class="form-control" name="email" id="username" type="email" onFocus="this.placeholder = ''"
                                        onBlur="this.placeholder = 'Enter email address'" placeholder='Enter email address' value={this.state.username} onChange={this.onInputChange}/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                    <input class="form-control" name="password" id="password" type="password" onFocus="this.placeholder = ''"
                                        onBlur="this.placeholder = 'Enter Phone Number'" placeholder='Enter Password' value={this.state.password} onChange={this.onInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class=" button btn_1 ">Log In</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4">
                    <img src={signup} alt="sign up"/>  
                    
                    </div>
                </div>
            </div>
        </div>
  </section>
  <Footer/>
  </React.Fragment>

    );
  }
}
const mapStateToProps = (state) =>{
    return{
        auth : state.auth,
        medData: state.medData,
        profile: state.profile
  
    }
  }

const mapDispatchToProps = (dispatch) =>{
    return{
        logIn: (authData) => dispatch(loginAct(authData)),
        updateProfile: (proData) => dispatch(updateProfile(proData)),
        updateMedData: (medData) => dispatch(updateMedData(medData))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(DoctorLogin);