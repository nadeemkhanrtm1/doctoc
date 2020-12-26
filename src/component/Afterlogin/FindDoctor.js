import React from 'react'
import Navbar from "./Navbar"
import ArrowDown from "../../images/arrow-down.png"
import SearchBar from "../../images/search-icon.png"
import Doctor from "../../images/doctor-pic.png"

const FindDoctor = () => {
  const arr = [1, 2, 3]

  const doctorName = "Dr. Joseph Cart";
  const doctorDetails = "Dental Surgeon - Flower Hospitals";
  const doctorRating = "★★★★";
  const doctorSpeciality = "LOREM IPSUM";
  const doctorLocations = "LOREM IPSUM";
  const doctorTiming = "9 AM";
  const doctorFee = "₹ 150";

  return ( <> <Navbar/> < div className = 'fd-container' > <div className='fd-row-1'>
    <div className='fd-col-1'>
      <h6>FILTERS</h6>
      <hr className="fd-hr"/> 
    {
      arr.map((value, index) =>
      <React.Fragment> <div className="fd-inner-row-1" key={index}>
        <div className="fd-inner-col-1">
          <h6>SPECIALTY</h6>
        </div>
        <div className="fd-inner-col-2">
          <img src={ArrowDown} alt="arrow-down"/>
        </div>
      </div>
      <hr className="fd-hr"/> 
      </React.Fragment>)
    }
    </div>
    <div className='fd-col-2'>
        <div className="fd-col-2-inner-row-1">
            <div className="fd-col-2-inner-col-1">
                <h1>Choose from Top Doctors</h1>
            </div>
            <div className="fd-col-2-inner-col-2">
                <div className="input-box">
                    <img src={SearchBar} alt="search bar" />
                    <input type="text" className="input-group" placeholder="Search doctor"/>
                </div>
            </div>
        </div>
        <div className="fd-col-2-inner-row-2">
            <table>
                <thead>
                    <tr>
                        <th style={{width:"340px"}}></th>
                        <th style={{width:"150px"}}>Specialty</th>
                        <th style={{width:"150px"}}>Location</th>
                        <th style={{width:"150px"}}>Timings</th>
                        <th style={{width:"150px"}}>Fee<br/><span>(starts from)</span></th>
                        <th style={{width:"200px"}}></th>
                    </tr>
                </thead>
                <tbody>
                    {/* wrap into map for more data */}
                    <tr>
                        <td>
                            <div className="fd-doctor-box">
                                <img src={Doctor} alt="dotors-pciture"/>
                                <div className="fd-doctor-box-col-2">
                                    <h1>{doctorName}</h1>
                                    <i>{doctorDetails}</i>
                                    <p>{doctorRating}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fd-p">{doctorSpeciality}</p>
                        </td>
                        <td>
                            <p className="fd-p">{doctorLocations}</p>
                        </td>
                        <td>
                            <time>{doctorTiming}</time>
                        </td>
                        <td>
                            <span className="fd-price">
                                {doctorFee}
                            </span>
                        </td>
                        <td>
                            <button className="fd-btn">BOOK</button>
                        </td>
                    </tr>
                    {/* wrap into map for more data below*/}
                    {/* wrap into map for more data */}
                    <tr>
                        <td>
                            <div className="fd-doctor-box">
                                <img src={Doctor} alt="dotors-pciture"/>
                                <div className="fd-doctor-box-col-2">
                                    <h1>{doctorName}</h1>
                                    <i>{doctorDetails}</i>
                                    <p>{doctorRating}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fd-p">{doctorSpeciality}</p>
                        </td>
                        <td>
                            <p className="fd-p">{doctorLocations}</p>
                        </td>
                        <td>
                            <time>{doctorTiming}</time>
                        </td>
                        <td>
                            <span className="fd-price">
                                {doctorFee}
                            </span>
                        </td>
                        <td>
                            <button className="fd-btn">BOOK</button>
                        </td>
                    </tr>
                    {/* wrap into map for more data below*/}
                </tbody>
            </table>
        </div>
    </div>
    </div> 
    </div>
        </>)
}

export default FindDoctor
