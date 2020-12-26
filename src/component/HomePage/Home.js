import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  const container = {
    maxWidth: '1600px'
  }
  const schedule = {
    boxShadow: '0px 4.05344px 4.05344px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    height: '600px'
  }

  const schedule2 = {
    boxShadow: '0px 4.05344px 4.05344px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px'
  }
  const date = "14/01/20";
  const reminder = "Appointment Reminder";
  const message = "Appointment Reminder Appointment ReminderAppointment ReminderAppointment Reminde" +
      "r";
  const MonthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  const DayArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const month = new Date().getMonth();
  const day = new Date().getDay();
  const todaysDate = new Date().getDate();
  const timeArr = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30"
  ];
  const VideoConsultations = 45;
  const AudioConsultations = 31;
  const InPersonConsultations = 15;
  return (
    <div className="container-fluid mt-5 containersize" style={container}>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div
            className="col-12 m-0 px-0 py-3 text-center scrollbaredit"
            style={schedule}>
            <div className="row m-0 p-0">
              <Link to="/appointment" className="btn btn-light Appointments">
                Appointments
              </Link>
              <Link to="/appointment" className="btn btn-light Patients">
                Patients
              </Link>
              <Link to="/appointment" className="btn btn-light Messages">
                Messages
              </Link>
              <Link to="/appointment" className="btn btn-light Review">
                Review
              </Link>
              <input
                className=" form-control mr-sm-2 searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
            </div>
            <table className="TableOfDoctorsHomePage">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reminder</th>
                  <th>Message</th>
                </tr>
                <tr>
                  <td>{date}</td>
                  <td>{reminder}</td>
                  <td>{message}</td>
                </tr>
                <tr>
                  <td>14/01/20</td>
                  <td>Prescription</td>
                  <td>Appointment Reminder Appointment ReminderAppointment ReminderAppointment
                    Reminder</td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="col-12 text-center">
            <div className="row p-0 m-0 text-center">
              <div className="col-4 p-0 m-0">
                <h1 className="Consultations">{VideoConsultations}</h1>
                <p className="ConsultationsName">Video Consultations</p>
              </div>
              <div className="col-4 p-0 m-0">
                <h1 className="Consultations">{AudioConsultations}</h1>
                <p className="ConsultationsName">Audio consultations</p>
              </div>
              <div className="col-4 p-0 m-0">
                <h1 className="Consultations">{InPersonConsultations}</h1>
                <p className="ConsultationsName">In-person consultations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 py-3 videocallcolumn" style={schedule2}>
          <h3 className="text-center">{todaysDate} {MonthArr[month]}, {DayArr[day]}</h3>
          <div className="row p-0 mt-3">
            {timeArr.map((value) => {
              return (
                <React.Fragment>
                  <div className="col-3 m-0 time">
                    <h6 className="m-0">{value}</h6>
                  </div>
                  <div className="col-8 p-0 m-0 marginTop">
                    {/*<h6 className=" m-0 VideoCallwithPatient">Video Call with Patient ABC</h6>*/}
                  </div>
                </React.Fragment>
              )
            })
}
          </div>
          <button className="btn btn-primary setavailbtn">SET AVAILABILITY</button>
          <div className="row m-0 p-0">
            <div className="col-12 text-right m-0 p-0">
              <Link className="expandlink">Expand</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
