import React from "react";
import Navbar from "../Navbar";
import Call from "../../../images/call.png";
import VideoCall from "../../../images/video-call.png";
import DoctorConsult from "../../../images/doctor-consult.png";
import DoctorSquare from "../../../images/doctor-square.png";
import Location from "../../../images/location-icon.png";

function SelectAppointment() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="sa-container">
        <div className="sa-row-1">
          <div className="sa-col-1">
            <h1>Choose your Appointment</h1>
            <table>
              <thead>
                <th style={{
                  width: '433px'
                }}>Type of Appointment</th>
                <th style={{
                  width: '433px'
                }}>Description</th>
                <th
                  style={{
                  width: '433px',
                  textAlign: 'center'
                }}>Fee</th>
              </thead>
              <tbody>
                {/* data here 1 */}
                <tr>
                  <td>
                    <div className="sa-table-inner-td">
                      <p>1. Consult on Phone Call (details/symptoms defined)</p>
                      <img src={Call} alt="phone call"/>
                    </div>
                  </td>
                  <td>An
                    <b>
                      AUDIO
                    </b>
                    call with the doctor where the patient has provided their symptoms’ details in
                    advance. call with the doctor where the patient has provided their symptoms’
                    details in advance.</td>
                  <td>
                    <div className="sa-table-inner-td-2">
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' id="150rs" className="sa-input-checkbox"/>
                        <label for="150rs">15 minutes</label>
                        <b>₹ 150</b>
                      </div>
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' name="" id="300rs" className="sa-input-checkbox"/>
                        <label for="300rs">30 minutes</label>
                        <b>₹ 300</b>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* data here 2 */}
                <tr>
                  <td>
                    <div className="sa-table-inner-td">
                      <p>2. Consult on Video Call (details/symptoms defined)</p>
                      <img src={VideoCall} alt="video call"/>
                    </div>
                  </td>
                  <td>An
                    <b>
                      AUDIO
                    </b>
                    call with the doctor where the patient has provided their symptoms’ details in
                    advance. call with the doctor where the patient has provided their symptoms’
                    details in advance.</td>
                  <td>
                    <div className="sa-table-inner-td-2">
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' id="150rs" className="sa-input-checkbox"/>
                        <label for="150rs">15 minutes</label>
                        <b>₹ 350</b>
                      </div>
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' name="" id="300rs" className="sa-input-checkbox"/>
                        <label for="300rs">30 minutes</label>
                        <b>₹ 700</b>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* data here 3 */}
                <tr>
                  <td>
                    <div className="sa-table-inner-td">
                      <p>3. Consult on Phone Call<br/>
                        (no information provided)</p>
                      <img src={Call} alt="phone call"/>
                    </div>
                  </td>
                  <td>An
                    <b>
                      AUDIO
                    </b>
                    call with the doctor where the patient has provided their symptoms’ details in
                    advance. call with the doctor where the patient has provided their symptoms’
                    details in advance.</td>
                  <td>
                    <div className="sa-table-inner-td-2">
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' id="150rs" className="sa-input-checkbox"/>
                        <label for="150rs">15 minutes</label>
                        <b>₹ 200</b>
                      </div>
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' name="" id="300rs" className="sa-input-checkbox"/>
                        <label for="300rs">30 minutes</label>
                        <b>₹ 400</b>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* data here 4 */}
                <tr>
                  <td>
                    <div className="sa-table-inner-td">
                      <p>4. Consult on Video Call<br/>
                        (no information provided)</p>
                      <img src={VideoCall} alt=""/>
                    </div>
                  </td>
                  <td>An
                    <b>
                      AUDIO
                    </b>
                    call with the doctor where the patient has provided their symptoms’ details in
                    advance. call with the doctor where the patient has provided their symptoms’
                    details in advance.</td>
                  <td>
                    <div className="sa-table-inner-td-2">
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' id="150rs" className="sa-input-checkbox"/>
                        <label for="150rs">15 minutes</label>
                        <b>₹ 400</b>
                      </div>
                      <div className="sa-table-inner-td-2-col-1">
                        <input type='checkbox' name="" id="300rs" className="sa-input-checkbox"/>
                        <label for="300rs">30 minutes</label>
                        <b>₹ 800</b>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* data here 5 */}
                <tr>
                  <td style={{
                    borderBottom: 'none'
                  }}>
                    <div className="sa-table-inner-td">
                      <p>5. Consult in person</p>
                      <img src={DoctorConsult} alt="phone call"/>
                    </div>
                  </td>
                  <td style={{
                    borderBottom: 'none'
                  }}>Meet and consult your doctor in person. Time limit may vary from 25-35 minutes. </td>
                  <td style={{
                    borderBottom: 'none'
                  }}>
                    <div className="sa-table-inner-td-2">
                      <div className="sa-table-inner-td-2-col-1">
                    
                        <b className="sa-500">₹ 500</b>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sa-col-2">
            <div className="in">
            <h1>Cost of Appointment</h1>
            <div className="sa-col-2-inner-row-1">
              <img src={DoctorSquare} alt="doctor image"/>
              <div>
                Dr. Schnoopy bloopers<br/>
                <location>
                  <img src={Location} alt="location"/>Newyork, USA</location>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Appointment type</th>
                  <th>Qty.</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Audio call (30 m)<br/><span style={{fontWeight:'500',fontSize:'12px'}}>(symptoms defined)</span></td>
                  <td>x1</td>
                  <td>₹ 300</td>
                </tr>
                <tr>
                  <td className="pb-5">Audio call (30 m)<br/><span style={{fontWeight:'500',fontSize:'12px'}}>(symptoms defined)</span></td>
                  <td className="pb-5">x1</td>
                  <td className="pb-5">₹ 300</td>
                </tr>
              </tbody>
            </table>
            <div className="sa-bill-total">
              <h6>Total</h6>
              <p>₹ 650</p>
            </div>
          </div>
          <div className="payment-btn">
                  <button>Proceed to pay</button>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SelectAppointment;
