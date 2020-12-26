import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./component/Afterlogin/AfterLog.css"
import ScrollToTop from './component/utilities/ScrollToTop';
import HomePage from "./component/BeforeLogin/HomePage";
import LoginPage from "./component/BeforeLogin/LoginPage";
import Login from './component/BeforeLogin/Login';
import Welcome from './component/BeforeLogin/Welcome';
import Home from './component/Afterlogin/appointment_compo/Home';
import Schedule from "./component/Afterlogin/Appointment";
import Profile from "./component/Afterlogin/Profile/Profile";
import DocSchedule from "./component/Afterlogin/screens/DocSchedule";
import SelectAppointment from "./component/Afterlogin/screens/SelectAppointment";
import DoctorLogin from './component/BeforeLogin/DoctorLogin';
import DoctorSignup from './component/BeforeLogin/DoctorSignup';
import forgotPass from './component/BeforeLogin/ForgotPass';
import forgotPassVeri from './component/BeforeLogin/ForgotPassVeri';
import FindDoctor from "./component/Afterlogin/FindDoctor";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/register" component={LoginPage}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route exact path="/welcome" component={Welcome}/>
          <Route path="/profile" component={Profile}/>
          <Route exact path="/schedule" component={Schedule}/> 
          <Route exact path="/doctor-schedule" component={DocSchedule} />
          <Route exact path="/selectappointment" component={SelectAppointment} />
          <Route exact path="/doctorlogin" component={DoctorLogin} />
          <Route exact path="/doctorsignup" component={DoctorSignup} />
          <Route exact path="/forgotpassword" component={forgotPass} />
          <Route exact path="/forgotpasswordverification" component={forgotPassVeri} />
          <Route exact paht="/find-doctor" component={FindDoctor} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
