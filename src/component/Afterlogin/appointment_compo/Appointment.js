import React, {useState} from 'react';
import box from "../../../images/appointment_images/orange_shade.png";
import bluebox from "../../../images/appointment_images/blue_shade.png";
import {Route, Switch, Link} from 'react-router-dom';
import Appointment_component from "./Appointment_section";
import Messages_component from "./Messages";
import Report_comp from "./Report";
import Prescrition_comp from "./Prescrition";

const Appointment = () => {
  const findoc = {
    borderRadius: '30px',
    fontFamily: 'Lato',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#000000',
    background: '#FFAC50',
    border: 'none'
  }

  const clickHandle1 = () => {
    setChange1(!change1);
  }
  const clickHandle2 = () => {
    setChange2(!change2);
  }
  const clickHandle3 = () => {
    setChange3(!change3);
  }
  const clickHandle4 = () => {
    setChange4(!change4);
  }
  const clickHandle5 = () => {
    setChange5(!change5);
  }
  const clickHandle6 = () => {
    setChange6(!change6);
  }
  const clickHandle7 = () => {
    setChange7(!change7);
  }
  const clickHandle8 = () => {
    setChange8(!change8);
  }
  const clickHandle9 = () => {
    setChange9(!change9);
  }
  const clickHandle10 = () => {
    setChange10(!change10);
  }
  const clickHandle11 = () => {
    setChange11(!change11);;
  }
  const clickHandle12 = () => {
    setChange12(!change12);
  }
  const clickHandle13 = () => {
    setChange13(!change13);
  }
  const clickHandle14 = () => {
    setChange14(!change14);
  }
  const clickHandle15 = () => {
    setChange15(!change15);
  }
  const clickHandle16 = () => {
    setChange16(!change16);
  }
  const clickHandle17 = () => {
    setChange17(!change17);
  }
  const clickHandle18 = () => {
    setChange18(!change18);
  }

  //onclick appointment
  const [appointment,
    setAppointment] = useState({borderBottom: '5px solid #F6815B', color: '#F6815B'});
  const [prescription,
    setPrescription] = useState({borderBottom: 'none'});
  const [reports,
    setReports] = useState({borderBottom: 'none'});
  const [message,
    setMessage] = useState({borderBottom: 'none'});
  const onclickappointment = () => {
    setAppointment({borderBottom: '5px solid #F6815B', color: '#F6815B'})
    setMessage({borderBottom: 'none'})
    setReports({borderBottom: 'none'})
    setPrescription({borderBottom: 'none'})
  }
  const onclickprecription = () => {
    setPrescription({borderBottom: '5px solid #F6815B', color: '#F6815B'})
    setAppointment({borderBottom: 'none'})
    setReports({borderBottom: 'none'})
    setMessage({borderBottom: 'none'})
  }
  const onclickreports = () => {
    setAppointment({borderBottom: 'none'})
    setPrescription({borderBottom: 'none'})
    setReports({borderBottom: '5px solid #F6815B', color: '#F6815B'})
    setMessage({borderBottom: 'none'})
  }
  const onclickmessages = () => {
    setAppointment({borderBottom: 'none'})
    setPrescription({borderBottom: 'none'})
    setMessage({borderBottom: '5px solid #F6815B', color: '#F6815B'})
    setReports({borderBottom: 'none'})
  }

  const h31 = {
    fontFamily: 'Playfair',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400'
  }
  const h32 = {
    fontFamily: 'Playfair',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700'
  }

  // change first image of fever

  const [change1,setChange1] = useState(true);
  const [change2,setChange2] = useState(true);
  const [change3,setChange3] = useState(true);
  const [change4,setChange4] = useState(true);
  const [change5,setChange5] = useState(true);
  const [change6,setChange6] = useState(true);
  const [change7,setChange7] = useState(true);
  const [change8,setChange8] = useState(true);
  const [change9,setChange9] = useState(true);
  const [change10,setChange10] = useState(true);
  const [change11,setChange11] = useState(true);
  const [change12,setChange12] = useState(true);
  const [change13,setChange13] = useState(true);
  const [change14,setChange14] = useState(true);
  const [change15,setChange15] = useState(true);
  const [change16,setChange16] = useState(true);
  const [change17,setChange17] = useState(true);
  const [change18,setChange18] = useState(true);

  return (
    <div className="flexBox">
      <div className="flex1">
        <div className="innerFlexforFirstDiv my-3">
          <div className="firstdiv">
            <Link
              to="/home"
              className="link"
              style={appointment}
              onClick={onclickappointment}>Appointments</Link>
            <Link
              to="/home/prescriptions"
              className="link"
              style={prescription}
              onClick={onclickprecription}>
              Prescriptions</Link>
            <Link
              to="/home/report"
              className="link"
              style={reports}
              onClick={onclickreports}>Reports</Link>
            <Link
              to="/home/messages"
              className="link"
              style={message}
              onClick={onclickmessages}>Messages</Link>
          </div>
          <div>
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"></input>
          </div>
        </div>
        <Switch>
          <Route exact path="/home" component={Appointment_component}/>
          <Route exact path="/home/prescriptions" component={Prescrition_comp}/>
          <Route exact path="/home/report" component={Report_comp}/>
          <Route exact path="/home/messages" component={Messages_component}/>
        </Switch>
      </div>
      <div className="flex2">
        <h3 style={h31}>Choose upto 3 symptoms to</h3>
        <h3 style={h32}>find your doctor</h3>
        <div className="innerFlex">
          <div className="innerContainer">
            <a onClick={clickHandle1}><img src={change1 ? box : bluebox} alt="Fever"/>
              <p>FEVER</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle2}><img src={change2 ? box : bluebox} alt="Chest Pain"/>
              <p>Chest<br/>Pain</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle3}><img src={change3 ? box : bluebox} alt="Thorat Pain"/>
              <p>Throat<br/>pain</p>
            </a>
          </div>
        </div>
        <div className="innerFlex">
          <div className="innerContainer">
            <a onClick={clickHandle4}><img src={change4 ? box : bluebox} alt="Runing Noise"/>
              <p>Runing<br/>noise</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle5}><img src={change5 ? box : bluebox} alt="Ear Pain"/>
              <p>Ear<br/>pain</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle6}><img src={change6 ? box : bluebox} alt="Head Ache"/>
              <p>Head<br/>ache</p>
            </a>
          </div>
        </div>
        <div className="innerFlex">
          <div className="innerContainer">
            <a
              style={{
              cursor: 'pointer'
            }}
              onClick={clickHandle7}><img src={change7 ? box : bluebox} alt="Difficulty in breathing"/>
              <p style={{
                fontSize: '0.899rem'
              }}>Difficulty<br/>in<br/>Breathing</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle8}><img src={change8 ? box : bluebox} alt="Cough"/>
              <p>Cough</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle9}><img src={change9 ? box : bluebox} alt="Mouth oral cavity"/>
              <p>Mouth/<br/>oral<br/>Cavity</p>
            </a>
          </div>
        </div>
        <div className="innerFlex">
          <div className="innerContainer">
            <a onClick={clickHandle10}><img src={change10 ? box : bluebox} alt="Lose Motions"/>
              <p>Lose<br/>Motions</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle11}><img src={change11 ? box : bluebox} alt="Stomach pain"/>
              <p>Stomach<br/>pain</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle12}><img src={change12 ? box : bluebox} alt="Vomiting"/>
              <p>Vomitting</p>
            </a>
          </div>
        </div>
        <div className="innerFlex">
          <div className="innerContainer">
            <a onClick={clickHandle13}><img src={change13 ? box : bluebox} alt="Urinary Symptoms"/>
              <p>Urinary<br/>Symptoms</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle14}><img src={change14 ? box : bluebox} alt="Shoulder pain"/>
              <p>Shoulder<br/>pain</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle15}>
              <img src={change15 ? box : bluebox} alt="Back pain"/>
              <p>Back<br/>pain</p>
            </a>
          </div>
        </div>
        <div className="innerFlex">
          <div className="innerContainer">
            <a onClick={clickHandle16}><img src={change16 ? box : bluebox} alt="Arm Hand Pain"/>
              <p>Arm/<br/>Hand<br/>pain</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle17}><img src={change17 ? box : bluebox} alt="Hip thigh pain"/>
              <p>Hip/thigh<br/>pain</p>
            </a>
          </div>
          <div className="innerContainer">
            <a onClick={clickHandle18}><img src={change18 ? box : bluebox} alt="Knee Leg Pain"/>
              <p>knee/<br/>leg pain</p>
            </a>
          </div>
        </div>
        <div className="innerFlex">
          <Link to="/find-doctor"><button type="button" className="btn btn-primary px-5 py-3 mb-2" style={findoc}>FIND DOCTOR</button></Link>
        </div>
      </div>
    </div>

  );
};

export default Appointment;
