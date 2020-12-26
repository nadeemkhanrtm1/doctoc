import React, {useState} from 'react';
import hand from "../../Images/handwriting.png";
import cross from "../../Images/x.png";

const Schedule = () => {
  const container = {
    maxWidth: '1500px'
  }
  const h4 = {
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontWeight: '700',
    color: '#000000'
  }
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const [time,
    setTime] = useState("9 am");
  const [disabled,
    setDisabled] = useState(true);
  const handleEdit = () => {
    setDisabled(false)
  }
  const handleBlur = () => {
    setDisabled(true);
  }
  const handleChange = (e) => {
    setTime(e.target.value);
  }
  return (
    <React.Fragment>
      <div className="container" style={container}>
        <div className="row mt-5">
          <div className="col-lg-6 text-center">
            <h4 className="text-center" style={h4}>Working plan</h4>
            <table width="100%" className="my-3 tableforworkingplan">
              <tr>
                <th>Day</th>
                <th>Start</th>
                <th>End</th>
              </tr>
              {days.map((value, index) => {
                return (
                  <tr>
                    <td>
                      <input
                        className="col-3 text-right"
                        type="radio"
                        name={value}
                        value={value}
                        id={value}/>
                      <label className="col-6 mb-0 text-left p-0" for={value}>{value}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={time}
                        className="col-4 inputfield"
                        onChange={handleChange}
                        disabled={disabled}
                        name={value}
                        maxLength="5"
                        onBlur={handleBlur}/>
                      <img src={hand} alt="..." onClick={handleEdit}/>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={time}
                        className="col-4 inputfield"
                        onChange={handleChange}
                        disabled={disabled}
                        name={value}
                        maxLength="5"
                        onBlur={handleBlur}/>
                      <img src={hand} alt="..." onClick={handleEdit}/>
                    </td>
                  </tr>
                )
              })}
            </table>
          </div>
          <div className="col-lg-6 text-center">
            <h4 className="text-center" style={h4}>Breaks</h4>
            <button className="btn btn-primary addbreak">+ Add break</button>
            <table width="100%" className="my-3 tableforbreaks">
              <tr>
                <th>Day</th>
                <th>Start</th>
                <th>End</th>
                <th>Action</th>
              </tr>
              {days.map((value) => {
                return (
                  <tr>
                    <td>
                      <input
                        className="col-3 text-right"
                        type="radio"
                        name={`${value}1`}
                        value={`${value}1`}
                        id={`${value}1`}/>
                      <label className="col-6 mb-0 text-left p-0" for={`${value}1`}>{value}</label>
                    </td>
                    <td>
                      <b className="mr-1">9 am</b>
                      <img src={hand} alt="..."/>
                    </td>
                    <td>
                      <b className="mr-1">6 pm</b>
                      <img src={hand} alt="..."/>
                    </td>
                    <td>
                      <img src={hand} alt="..." classname="cross"/>
                      <img src={cross} alt="..." className="cross"/>
                    </td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center my-3">
            <button className="btn btn-primary updatebutton">UPDATE</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Schedule;
