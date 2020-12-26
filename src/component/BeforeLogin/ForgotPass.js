import React, { Component } from 'react';
//import Cookies from 'universal-cookie';
import {Auth} from "aws-amplify";
import signup from '../../BeforeLogInImages/signupimg.png';
import config from "../../config.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Amplify from "aws-amplify";
//const cookies = new Cookies();


class ForgotPass extends Component {
  state = {
    email: "",
    errorState: false,
    error: "",
    checkStatus: false
    
  };


  componentDidMount = () =>{
    Amplify.configure({
      Auth:{
          mandatotySignIn: true,
          region : config.cognito.REGION,
          userPoolId : config.cognito.USER_POOL_ID,
          userPoolWebClientId : config.cognito.APP_CLIENT_ID
      }
    });    
  }

  handleSubmit = async event => {
    event.preventDefault();

    // AWS Cognito integration here
    try {
      await Auth.forgotPassword(this.state.email);
      this.setState({checkStatus: true});
      this.props.history.push('/forgotpasswordverification');
    }catch(error) {
        console.log(error);
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
                        <h1>Forgot your password?</h1>
                        <h6>
                            Please enter the email address associated with your account and we'll
                            email you a password reset link.
                        </h6>
                        <br/><br/>
                    </div>  
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate" onSubmit={this.handleSubmit}>
                            {this.state.errorState ? (
                              <div className="row">
                                <div className="col-sm-12" class="errorDiv">{this.state.error}</div>
                              </div>
                            ): null}  
                            {this.state.checkStatus ? (
                              <div className="row">
                                <div className="col-sm-12" class="">Check Your Email for verification code</div>
                              </div>
                            ): null}  
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                    <input class="form-control" name="email" id="email" type="email" onFocus="this.placeholder = ''"
                                        onBlur="this.placeholder = 'Enter email address'" placeholder='Enter email address' value={this.state.email} onChange={this.onInputChange}/>
                                    </div>
                                </div>
                                {/* <div class="col-12">
                                    <div class="form-group">
                                    <input class="form-control" name="password" id="password" type="password" onFocus="this.placeholder = ''"
                                        onBlur="this.placeholder = 'Enter Phone Number'" placeholder='Enter Password' value={this.state.password} onChange={this.onInputChange}/>
                                    </div>
                                </div> */}
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class=" button btn_1 ">Submit</button>
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

export default ForgotPass;