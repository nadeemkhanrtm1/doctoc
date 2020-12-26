import React from 'react';
import Clinicpic from "../../Images/clinic-image.png";
import {Link} from "react-router-dom";
import Hand from "../../Images/handwriting.png"

const Clinicdetails = () => {
  const container = {
    maxWidth: '1500px'
  }
  const clinicname = {
    fontFamily: 'Playfair Display',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    textDecoration: 'underline'
  }
  const address = {
    fontFamily: 'Overpass',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700'
  }
  const phoneno = {
    fontFamily: 'Overpass',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#4E4957'
  }
  const details = {
    fontFamily: 'Overpass',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#000000'
  }
  const moredetail = {
    fontFamily: 'Overpass',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#4E4957',
    textDecoration:'underline'
  }
  return (
    <div className="container-fluid mt-5" style={container}>
      <div className="row">
        <div className="col-lg-6 col-md-12 p-0 m-0 text-center">
          <div className="row p-0 m-0">
            <div className="col-lg-6 col-md-12 m-0 p-0">
              <img src={Clinicpic} className="img-fluid"/>
            </div>
            <div className="col-lg-6 col-md-12 p-0 m-0 text-lg-left text-md-center">
              <h3 style={clinicname}>Country Clinic<img src={Hand} alt="..."/></h3>
              <p style={address}>456, Melony Drive, Small road New York City, USA</p>
              <h6 style={phoneno}>+44 55 66 77 88,+44 55 66 77 99</h6>
              <p style={details}>General, Dermatology clinic</p>
              <p style={details}>Services offered: XYZ, XYZ, XYZ, XYZ. XYZ, XYZ</p>
              <p style={phoneno}>Timings- 9.30 AM to 7 PM, Monday to Saturday</p>
              <Link style={moredetail} to="/profile/clinic-full-details">More details</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-0 m-0 text-center">
          <div className="row p-0 m-0">
            <div className="col-lg-6 col-md-12 m-0 p-0"> 
              <img src={Clinicpic} className="img-fluid"/>
            </div>
            <div className="col-lg-6 col-md-12 p-0 m-0 text-lg-left text-md-center">
              <h3 style={clinicname}>Country Clinic<img src={Hand} alt="..."/></h3>
              <p style={address}>456, Melony Drive, Small road New York City, USA</p>
              <h6 style={phoneno}>+44 55 66 77 88,+44 55 66 77 99</h6>
              <p style={details}>General, Dermatology clinic</p>
              <p style={details}>Services offered: XYZ, XYZ, XYZ, XYZ. XYZ, XYZ</p>
              <p style={phoneno}>Timings- 9.30 AM to 7 PM, Monday to Saturday</p>
              <Link style={moredetail} to="/profile/clinic-full-details">More details</Link>
            </div>
          </div>
        </div>
        <div className="col-12 text-center my-3">
            <button className="btn btn-primary addclinic">+ ADD CLINIC</button>
        </div>
      </div>
    </div>
  )
}

export default Clinicdetails
