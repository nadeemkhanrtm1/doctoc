import React from 'react';
import Hand from "../../Images/handwriting.png"

const Personaldetails = () => {
  return (
    <form>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 text-center">
            <div className="row mt-4">
              <div className="col-4">
                <label for="degree">Degree:</label>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" placeholder="Enter UG" id="degree"/>
              </div>
              <div >
                <img src={Hand} alt="..." className="hand"/>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" placeholder="Enter PG"/>
              </div>
              <div>
                <img src={Hand} alt="..." className="hand"/>
              </div>
              {/* Specialty  */}
              <div className="col-12 text-center mt-4">
                <div className="row mt-4">
                  <div className="col-4">
                    <label for="specialty">Specialty:</label>
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Specialty"
                      id="specialty"/>
                  </div>
                  <div >
                    <img src={Hand} alt="..." className="hand"/>
                  </div>
                  <div className="col-2">
                    <label for="experience">Experience:<br/>(in years)</label>
                  </div>
                  <div className="col-1">
                    <input type="text" className="form-control"/>
                  </div>
                  <div>
                    <img src={Hand} alt="..." className="hand"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-5"> 
              <h1>Registration details:<img src={Hand} alt="..." className="handwithh1"/></h1>
          </div>
          <div className="col-12 text-center">
              <div className="row my-3">
                <div className="col-6 text-right">
                <h4>Registration number:</h4>
                </div>
                <div className="col-6 text-left">
                    <h4>ABC</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 text-right">
                <h4>Council name:</h4>
                </div>
                <div className="col-6 text-left">
                    <h4>ABC</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 text-right">
                <h4>Year of registration:</h4>
                </div>
                <div className="col-6 text-left">
                    <h4>ABC</h4>
                </div>
              </div>
          </div>
          <div className="col-12 text-center">
              <button className="btn btn-primary updatebutton">UPDATE</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Personaldetails
