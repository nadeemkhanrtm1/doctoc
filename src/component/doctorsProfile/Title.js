import React, {useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Personaldetails from './Personaldetails';
import Clinicdetails from "./Clinicdetails";
import Fullclinicdetail from './Fullclinicdetail';
import Schedule from "./Schedule";

const Title = () => {
  const [style,
    setStyle] = useState({backgroundColor : '#FFE5C6'});
  const [style2,setStyle2] = useState({backgroundColor:'white'});
  const [style3,setStyle3] = useState({backgroundColor:'white'});
    const handleClick = () => {
      setStyle({backgroundColor:'#FFE5C6'})
      setStyle2({backgroundColor:'white'})
      setStyle3({backgroundColor:'white'})
    }
    const handleClick2 = () => {
      setStyle({backgroundColor:"white"})
      setStyle2({backgroundColor:"#FFE5C6"})
      setStyle3({backgroundColor:'white'})
    }
    const handleClick3 = () => {
      setStyle({backgroundColor:'white'})
      setStyle2({backgroundColor:'white'})
      setStyle3({backgroundColor:'#FFE5C6'})
    }
  return (
    <React.Fragment>
      <div className="text-center doctordetailstitle">
        <Link to="/profile" className="btn btn-light link" style={style} onClick={handleClick}>Personal Details</Link>
        <Link to="/profile/clinic-details" className="btn btn-light link" style={style2} onClick={handleClick2} >Clinic Details</Link>
        <Link to="/profile/clinic-schedule" className="btn btn-light link" style={style3} onClick={handleClick3}>Schedule</Link>
      </div>
      <Switch>
        <Route exact path="/profile" component={Personaldetails}/>
        <Route exact path="/profile/clinic-details" component={Clinicdetails}/>
        <Route exact path="/profile/clinic-full-details" component={Fullclinicdetail}/>
        <Route exact path="/profile/clinic-schedule" component={Schedule}/>
      </Switch>
    </React.Fragment>
  )
}

export default Title
