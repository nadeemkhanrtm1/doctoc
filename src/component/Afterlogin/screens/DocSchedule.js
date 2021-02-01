import React,{ useState } from "react";
import Navbar from "../Navbar";
import DoctorImage from "../../../images/doctor.png"
import Dermatologist from "../../../speciality/Dermatologist.png";
import FamilyPhysician from "../../../speciality/FamilyPhysician.png";
import Surgeon from "../../../speciality/Surgeon.png";
import ArrowLeft from "../../../images/arrow-left.png";
import ArrowRight from "../../../images/arrow-right.png";
import moment from "moment";

const DocSchedule = () => {
  const [monthInShort,setMonthInShort] = useState(moment().format('MMM'));
  const [month,setMonth] = useState(moment().format('MMMM'));
  const [year,setYear] = useState(moment().year());
  const [daysInMonth,setDaysInMonth] = useState(moment().daysInMonth());
  //Pre And Next Month Handler
  const PreMonth = () => {
      setMonth(moment(`1-${month}-${year}`).subtract(1,'months').format('MMMM'))
      setDaysInMonth(moment(`1-${month}-${year}`).subtract(1,'months').daysInMonth())
      setMonthInShort(moment(`1-${month}-${year}`).subtract(1,'months').format('MMM'))
  }
  const NextMonth = () => {
    setMonth(moment(`1-${month}-${year}`).add(1,'months').format('MMMM'))
    setDaysInMonth(moment(`1-${month}-${year}`).add(1,'months').daysInMonth())
    setMonthInShort(moment(`1-${month}-${year}`).add(1,'months').format('MMM'))
  }

  //Pre and Next Year Handler
  const PreYear = () => {
    setYear(year-1)
  }
  const NextYear = () => {
    setYear(year+1)
  }


  //get full dates of months in array
 const daysofMonth = [];
 for( var i =1; i<=daysInMonth;i++){
   daysofMonth.push(i);
 }
 //days of the week
 const weekDays = ["MON","TUE","WED","THU","FRI","SAT","SUN"]
  return (
    <React.Fragment>
      <Navbar/>
      <div className="ds-container">
        <div className="ds-row-1">
          <div className="ds-col-1">
            <img src={DoctorImage} alt=""/>
            <h1>Dr. Schnoopy Bloopers</h1>
            <i>Dermatologist</i>
            <location>Newyork, USA</location>
          </div>
          <div className="ds-col-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet
              viverra dui viverra ultricies. Vestibulum dui ligula, consequat eget facilisis
              et, condimentum at orci. Etiam malesuada ligula et egestas fermentum. Vestibulum
              nec libero mollis, accumsan quam at, venenatis neque. Phasellus orci eros,
              euismod id mauris eget, tincidunt pharetra purus. Nulla mauris nibh, fermentum
              sit amet mattis nec. Pellentesque in faucibus nibh. Integer condimentum
              imperdiet blandit. Quisque id ligula sit amet arcu consequat volutpat a vel est.
              Vestibulum ac convallis enim, a scelerisque tellus. Sed euismod et enim a
              imperdiet. Etiam auctor risus non neque consequat, quis auctor nunc aliquet.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet
              viverra dui viverra ultricies. Vestibulum dui ligula, consequat eget facilisis
              et, condimentum at orci. Etiam malesuada ligula et egestas fermentum. Vestibulum
              nec libero mollis, accumsan quam at, venenatis neque. Phasellus orci eros,
              euismod id mauris eget, tincidunt pharetra purus. Nulla mauris nibh, fermentum
              sit amet mattis nec. Pellentesque in faucibus nibh. Integer condimentum
              imperdiet blandit. Quisque id ligula sit amet arcu consequat volutpat a vel est.
              Vestibulum ac convallis enim, a scelerisque tellus. Sed euismod et enim a
              imperdiet. Etiam auctor risus non neque consequat, quis auctor nunc aliquet.
            </p>
          </div>
          <div className="ds-col-3">
            <div className="ds-col-inner-1">
              <div className="ds-col-inner-inner-1">
                <div className="image-wrapper-1">
                  <img src={Dermatologist} alt="Dermatologist"/>
                </div>
                <p>Dermatologist</p>
              </div>
            </div>
            <div className="ds-col-inner-2">
              <div className="ds-col-inner-inner-2">
                <div className="image-wrapper-2">
                  <img src={FamilyPhysician} alt="Family Physician"/>
                </div>
                <p>Family Physician</p>
              </div>
            </div>
            <div className="ds-col-inner-3">
              <div className="ds-col-inner-inner-3">
                <div className="image-wrapper-3">
                  <img src={Surgeon} alt="Surgeon"/>
                </div>
                <p>Surgeon</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ds-row-2">
          <h1>Select your preferred date and time</h1>
          <div className="ds-inner-row-1">
            <div>
              <img src={ArrowLeft} alt="arrow-left" onClick={PreMonth}/>
              <span className="ds-month">{month}</span>
              <img src={ArrowRight} alt="arrow-right" onClick={NextMonth}/>
            </div>
            <div>
              <img src={ArrowLeft} alt="arrow-left" onClick={PreYear}/>
              <span className="ds-year">{year}</span>
              <img src={ArrowRight} alt="arrow-right" onClick={NextYear}/>
            </div>
          </div>
          <div className="ds-inner-row-2">
            <img src={ArrowLeft} alt="arrow-left"/>
              {
                daysofMonth.map((dates)=>{
                  return(
                  <React.Fragment>
                    <i>{dates}</i>
                    <i>{monthInShort}</i>
                    <i>{weekDays[moment(`${dates}-${monthInShort}-${year}`).day()-1]}</i>
                  </React.Fragment>
                  )
                  
                })
              }
              <div className="ds-carousel">
                <span>1</span>
              </div>
            <img src={ArrowRight} alt="arrow-right"/>
          </div>
          <div className="ds-inner-row-3">
              <table>
                  <tr>
                    <th>MORNING</th>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                  </tr>
                  <br/>
                  <tr>
                    <th></th>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                  </tr>
                  <br/>
                  <tr>
                    <th>AFTERNOON</th>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                  </tr>
                  <br/>
                  <tr>
                    <th>EVENING</th>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                    <td>9:00 AM-9:30AM</td>
                  </tr>
              </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DocSchedule;
