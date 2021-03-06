import React , { Component }from 'react';
import {connect} from 'react-redux';
import {loginAct,logoutAct} from '../../../store/actions/authActions';
import {updateProfile} from '../../../store/actions/profileActions';
import {updateMedData} from '../../../store/actions/medDataActions';
import config from '../../../config.json';
import {Link} from "react-router-dom";
import Axios from 'axios';
import Styles from "./Medical.module.css";


class Medical extends Component {
  state={
    patientId: "",
    diabetes: "",
    hypertension: "",
    hypotension: "",
    otherHeartAlignment: "",
    thyroid: "",
    astama: "",
    elilepsyHistory: "",
    otherChestAlignment: "",
    allergy: "",
    recentTreatment: "",
    ongoingTreatment: "",
    recentHospitalisation: "",
    pastSurgeries: "",
    bloodGroup: "",
    BMI: "",
  }
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }  
  componentDidMount =()=>{
    console.log(this.props);
    this.setState({diabetes: this.props.medData.diabetes });
    this.setState({hypertension: this.props.medData.hypertension });
    this.setState({hypotension: this.props.medData.hypotension });
    this.setState({otherHeartAlignment: this.props.medData.otherHeartAlignment });
    this.setState({thyroid: this.props.medData.thyroid });
    this.setState({astama: this.props.medData.astama });
    this.setState({elilepsyHistory: this.props.medData.elilepsyHistory });
    this.setState({otherChestAlignment: this.props.medData.otherChestAlignment });
    this.setState({allergy: this.props.medData.allergy });
    this.setState({recentTreatment: this.props.medData.recentTreatment });
    this.setState({ongoingTreatment: this.props.medData.ongoingTreatment });
    this.setState({recentHospitalisation: this.props.medData.recentHospitalisation });
    this.setState({pastSurgeries: this.props.medData.pastSurgeries });
    this.setState({bloodGroup: this.props.medData.bloodGroup });
    this.setState({BMI: this.props.medData.BMI });
    this.setState({patientId: this.props.medData.patientId });
  }
  handleUpdate = async event=>{
    let params ={
      "patientId": this.state.patientId,
      "diabetes": this.state.diabetes,
      "hypertension": this.state.hypertension,
      "hypotension": this.state.hypotension,
      "otherHeartAlignment": this.state.otherHeartAlignment,
      "thyroid": this.state.thyroid,
      "astama": this.state.astama,
      "elilepsyHistory": this.state.elilepsyHistory,
      "otherChestAlignment": this.state.otherChestAlignment,
      "allergy": this.state.allergy,
      "recentTreatment": this.state.recentTreatment,
      "ongoingTreatment": this.state.ongoingTreatment,
      "recentHospitalisation": this.state.recentHospitalisation,
      "pastSurgeries": this.state.pastSurgeries,
      "bloodGroup": this.state.bloodGroup,
      "BMI": this.state.BMI,
    }
    this.props.updateMedData(params);
    await Axios.post(`${config.api.invokeUrl}/meddata/${this.props.profile.patientId}`,params);
  }
  render(){
  console.log(this.state);
  const heading = {
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#000000'
  }

  const p = {
    color: '#000000'
  }

  const h4 = {
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700'
  }

  const span = {
    position: 'relative',
    left: '50px',
    top: '10px',
    fontFamily: 'Overpass',
    fontSize: '16px',
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#7A7A7A !important',
    textDecoration:'underline',


  }
  return (
    <React.Fragment>
      <form className={Styles.form}>
        <table className={Styles.table}>
          <tr>
            <th>
              <p style={heading}>Diseases/Ailments</p>
            </th>
          </tr>
          <tr>
            <th>
              <p style={p}>Diabetes:</p>
            </th>
            <td>
              <input type="radio" id="yes" name="diabetes" value="yes" checked={this.state.diabetes === 'yes'} onChange={this.onInputChange}/>
              <label for="yes">yes</label>
            </td>
            <td>
              <input type="radio" id="no" name="diabetes" value="No" className="input1" checked={this.state.diabetes === 'No'} onChange={this.onInputChange}/>
              <label for="no" className="label1">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow" name="diabetes" value="doNotKnow" checked={this.state.diabetes === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow">don't know</label>
            </td>
          </tr>
          <tr>
            <th>
              <p style={p}>Hypertension:<br/>(High blood pressure)</p>
            </th>
            <td>
              <input type="radio" id="yes1" name="hypertension" value="Yes" checked={this.state.hypertension === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes1">yes</label>
            </td>
            <td>
              <input type="radio" id="no1" name="hypertension" value="No" checked={this.state.hypertension === 'No'} onChange={this.onInputChange}/>
              <label for="no1">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow1" name="hypertension" value="doNotKnow" checked={this.state.hypertension === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow1">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Hypotension:<br/>(Low blood pressure)</p>
            </th>
            <td>
              <input type="radio" id="yes2" name="hypotension" value="Yes" checked={this.state.hypotension === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes2">yes</label>
            </td>
            <td>
              <input type="radio" id="no2" name="hypotension" value="No"  checked={this.state.hypotension === 'No'}onChange={this.onInputChange}/>
              <label for="no2">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow2" name="hypotension" value="doNotKnow" checked={this.state.hypotension === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow2">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any other Heart ailment:</p>
            </th>
            <td>
              <input type="radio" id="yes3" name="otherHeartAlignment" value="Yes" checked={this.state.hypertension === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes3">yes</label>
            </td>
            <td>
              <input type="radio" id="no3" name="otherHeartAlignment" value="No" checked={this.state.otherHeartAlignment === 'No'} onChange={this.onInputChange}/>
              <label for="no3">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow3" name="otherHeartAlignment" value="donotknow" checked={this.state.otherHeartAlignment === 'donotknow'} onChange={this.onInputChange}/>
              <label for="donotknow3">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Thyroid disorder:</p>
            </th>
            <td>
              <input type="radio" id="yes4" name="throid" value="Yes" checked={this.state.hypertension === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes4">yes</label>
            </td>
            <td>
              <input type="radio" id="no4" name="throid" value="No" checked={this.state.throid === 'No'} onChange={this.onInputChange}/>
              <label for="no4">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow4" name="throid" value="doNotKnow" checked={this.state.throid === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow4">don't know</label>
            </td>
          </tr>
          <tr>
            <th>
              <p style={p}>Asthma:</p>
            </th>
            <td>
              <input type="radio" id="yes5" name="asthma" value="Yes" checked={this.state.hypertension === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes5" className="label6">yes</label>
            </td>
            <td>
              <input type="radio" id="no5" name="asthma" value="No" checked={this.state.asthma === 'No'} onChange={this.onInputChange}/>
              <label for="no5" className="label6">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow5" name="asthma" value="doNotKnow" checked={this.state.asthma === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow5" className="label6">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>History of epilepsy:<br/>(seizures)</p>
            </th>
            <td>
              <input type="radio" id="yes6" name="elilepsyHistory" value="Yes"  checked={this.state.elilepsyHistory === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes6" className="label7">yes</label>
            </td>
            <td>
              <input type="radio" id="no6" name="elilepsyHistory" value="No" checked={this.state.elilepsyHistory === 'No'} onChange={this.onInputChange}/>
              <label for="no6" className="label7">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow6" name="elilepsyHistory" value="doNotKnow" checked={this.state.elilepsyHistory === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow6" className="label7">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any other chest ailment:</p>
            </th>
            <td>
              <input type="radio" id="yes7" name="otherChestAlignment" value="Yes" checked={this.state.otherChestAlignment === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes7" className="label8">yes</label>
            </td>
            <td>
              <input type="radio" id="no7" name="otherChestAlignment" value="No" checked={this.state.otherChestAlignment === 'No'} onChange={this.onInputChange}/>
              <label for="no7" className="label8">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow7" name="otherChestAlignment" value="doNotKnow" checked={this.state.otherChestAlignment === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow7" className="label8">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any Know allergy:</p>
            </th>
            <td>
              <input type="radio" id="yes8" name="allergy" value="Yes" checked={this.state.allergy === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes8" className="label9">yes</label>
            </td>
            <td>
              <input type="radio" id="no8" name="allergy" value="No" checked={this.state.allergy === 'No'} onChange={this.onInputChange}/>
              <label for="no8" className="label9">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow8" name="allergy" value="doNotKnow" checked={this.state.allergy === 'doNotKnow'} onChange={this.onInputChange}/>
              <label for="donotknow8" className="label9">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Recent treatment<br/>(last 2 weeks):</p>
            </th>
            <td>
              <input type="radio" id="yes9" name="recentTreatment" value="Yes" checked={this.state.hypertension === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes9" className="label10">yes</label>
            </td>
            <td>
              <input type="radio" id="no9" name="recentTreatment" value="No" checked={this.state.recentTreatment === 'No'} onChange={this.onInputChange}/>
              <label for="no9" className="label10">no</label>
            </td>
          </tr>
        </table>

        <table className={Styles.table2}>
          <tr>
            <th>
              <p style={p}>Any ongoing treatment:</p>
            </th>
            <td>
              <input type="radio" id="yes10" name="ongoingTreatment" value="Yes" checked={this.state.ongoingTreatment === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes10" className="label11">yes</label>
            </td>
            <td>
              <input type="radio" id="no10" name="ongoingTreatment" value="No" checked={this.state.ongoingTreatment === 'No'} onChange={this.onInputChange}/>
              <label for="no10" className="label11">no</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any recent hospitilisation:</p>
            </th>
            <td>
              <input type="radio" id="yes11" name="recentHospitalisation" value="Yes" checked={this.state.recentHospitalisation === 'Yes'}  onChange={this.onInputChange}/>
              <label for="yes11" className="label12">yes</label>
            </td>
            <td>
              <input type="radio" id="no11" name="recentHospitalisation" value="No" checked={this.state.recentHospitalisation === 'No'} onChange={this.onInputChange}/>
              <label for="no11" className="label12">no</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any past surgeries:</p>
            </th>
            <td>
              <input type="radio" id="yes12" name="pastSurgeries" value="Yes" checked={this.state.pastSurgeries === 'Yes'} onChange={this.onInputChange}/>
              <label for="yes12" className="label13">yes</label>
            </td>
            <td>
              <input type="radio" id="no12" name="pastSurgeries" value="No" checked={this.state.pastSurgeries === 'No'} onChange={this.onInputChange}/>
              <label for="no12" className="label13">no</label>
            </td>
          </tr>
          <tr>
            <th>
              <b>Blood group:</b>
            </th>
            <td colSpan="2">
              <select className="form-control"  name="bloodGroup" onChange={this.onInputChange}>
                <option selected></option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="doNotKnow">don't know</option>
              </select>
            </td>
          </tr>
          <h4 style={h4}>
            BMI Calculation:
          </h4>
          <tr>
            <th>
              <p style={p}>height:</p>
            </th>
            <td colSpan="2">
              <input type="text" className="form-control"/>
            </td>
          </tr>
          <tr>
            <th>
              <p style={p}>weight:</p>
            </th>
            <td colSpan="2">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon1"/>
                <div class="input-group-prepend">
                  <select className="form-control">
                    <option selected></option>
                    <option>Kg</option>
                    <option>lbs</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <h4 style={h4}>
            Your BMI (body mass index) is
          </h4>
          <tr className="text-center">
            <td colSpan="3">
              <button type="button" className={Styles.update} onClick={this.handleUpdate}>UPDATE</button>
              <span style={span} >
                <Link className={Styles.span}>Remind me later</Link>
              </span>
            </td>
          </tr>
        </table>
      </form>
    </React.Fragment>
  )
}
}
const mapStateToProps = (state) =>{
  return{
      auth : state.auth,
      medData: state.medData,
      profile: state.profile

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      logIn: (authData) => dispatch(loginAct(authData)),
      updateProfile: (proData) => dispatch(updateProfile(proData)),
      updateMedData: (medData) => dispatch(updateMedData(medData))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Medical);
