import React from 'react';
import Image1 from "../../../images/dash-col-1-image.png";


const Dashboard = () => {
  const p = {
    fontFamily: 'Lato',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#486581',
    marginBottom: '0px',
    textAlign: 'left'
  }
  return (
    <React.Fragment>
      <div className="dashBoardContainer">
        <p className="dsh_heading" style={p}>YOUR DAILY MEDICATION</p>
        <div className="dash-row">
          <div className="dash-col-1">
            <img src={Image1} alt=""/>
            <time>8-9AM</time>
            <span>Metformin</span>
            <i>2 pills</i>
            <input type="checkbox" name="checkbox"/>
          </div>
          <div className="dash-col-2">
          <img src={Image1} alt=""/>
            <time>8-9AM</time>
            <span>Trulicity</span>
            <i>2 pills</i>
            <input type="checkbox" name="checkbox"/>
          </div>
          <div className="dash-col-3"></div>
          <div className="dash-col-4"></div>
          <div className="dash-col-5">
            <button>Schedule Appointment</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard;
