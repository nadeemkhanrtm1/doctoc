import React from 'react';
import clinic from "../../Images/clinic-image.png";

const Fullclinicdetail = () => {
  const container = {
    maxWidth: '1500px'
  }
  const image = {
    width: '100%',
    height: '100%'
  }
  const clinicName = {
    fontFamily: 'Playfair Display',
    fontSize: '35px',
    fontWeight: '700',
    textDecoration: 'underline'
  }
  const address = {
    fontFamily: 'Overpass',
    fontSize: '17px',
    fontWeight: '700'
  }
  const phoneno = {
    fontFamily: 'Overpass',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#4E4957'
  }
  const fee = {
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    textDecoration: 'underline'
  }
  const clinicdetails = {
    fontFamily: 'Overpass',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#000000'
  }
  const document = {
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    textDecoration: 'underline'
  }
  return (
    <div className="container" style={container}>
      <div className="row mt-5">
        <div className="col-lg-4">
          <img src={clinic} alt="..." style={image}/>
        </div>
        <div className="col-lg-3">
          <h1 style={clinicName}>Country Clinic</h1>
          <p style={address} className="mt-3">456, Melony Drive, Small road New York City, USA</p>
          <p style={phoneno}>+44 55 66 77 88,+44 55 66 77 99</p>
          <p style={fee} className="mt-5">Fee structure</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales nibh
            sit amet nibh ullamcorper fermentum.</p>
        </div>
        <div className="col-lg-3">
          <p className="mt-3" style={clinicdetails}>General, Dermatology clinic</p>
          <p style={clinicdetails}>Services offered: XYZ, XYZ, XYZ, XYZ. XYZ, XYZ</p>
          <p style={phoneno}>Timings- 9.30 AM to 7 PM, Monday to Saturday</p>
        </div>
      </div>
      <h4 style={document} className="mt-5">Documents</h4>
      <div className="row">
        <div className="col-lg-8 mb-3">
          <button className="btn btn-primary documentbtn">Registration proof</button>
          <button className="btn btn-primary mx-3 documentbtn">Waste disposal</button>
          <button className="btn btn-primary mr-3 documentbtn">Sales tax</button>
          <a>+Add more</a>
        </div>
        <div className="col-lg-2">
          <button className="btn btn-primary updatebutton">UPDATE</button>
        </div>
      </div>
    </div>
  )
};

export default Fullclinicdetail;
