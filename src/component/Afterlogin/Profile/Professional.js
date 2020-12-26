import React , { Component }from 'react';
import Styles from "./Professional.module.css";
import {connect} from 'react-redux';
import {loginAct,logoutAct} from '../../../store/actions/authActions';
import {updateProfile} from '../../../store/actions/profileActions';
import {updateMedData} from '../../../store/actions/medDataActions';
import config from '../../../config.json';
import {Link} from "react-router-dom";
import Axios from 'axios';


class Professional extends Component {
  state = {
    emailId: "",
    mobileNo: "",
    startDate: new Date(),
    gender:"",
    firstName:"",
    birthdate: "",
    lastName:"",
    day: 1,
    month: 1,
    year: 1996,
    age: 0,
  };  

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  }  


  componentDidMount =()=>{
    console.log("props",this.props);
    this.setState({firstName: this.props.profile.firstName });
    this.setState({lastName: this.props.profile.lastName });
    this.setState({birthdate: this.props.profile.birthDate });
    this.setState({mobileNo: this.props.profile.mobileNo });
    this.setState({emailId: this.props.profile.emailId });
    this.setState({gender: this.props.profile.gender });
    if(this.props.profile.birthDate){
        let d = new Date(this.props.profile.birthDate.replace(/['"]+/g, '')); 
        console.log(d);
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        let nD = new Date();
        this.setState({year: year});
        this.setState({month: month });
        this.setState({day: day });
        let age = Math.floor(((nD.getMonth() - d.getMonth() + (12 * (nD.getFullYear() - d.getFullYear()))))/12)
        this.setState({age: age });
        console.log("state",this.state); 
    }
   }

  handleUpdate = async event=>{
    const{  email, mobileNo, birthDate,  gender, firstName, lastName} = this.state;
    let params ={
      'emailId': email,
      'mobileNo': mobileNo,
      'gender' : gender,
      'firstName' : firstName,
      'lastName' : lastName,
      'birthdate': JSON.stringify(birthDate),
      'patientId': this.props.profile.patientId,
      'profilePic': this.props.profile.profilePic
    }
    this.props.updateProfile(params);
    await Axios.post(`${config.api.invokeUrl}/patients/${this.props.profile.patientId}`,params);
  }
render(){


  //styles
  const i = {
    fontFamily: 'Overpass',
    fontSize: '16px',
    fontStyle: 'italic',
    fontWeight: '600',
    color:'#7A7A7A',
    textDecoration:'underline',
  }

  const i2= {
    fontFamily: 'Overpass',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '200',
    color:'#7A7A7A',
  }
  return (
    <React.Fragment>
      <form className={Styles.form}>
        <table className={Styles.table}>
          <tr >
            <th>
              <b>Patient ID:</b>
            </th>
            <td colSpan="3">
              <p>{this.props.profile.patientId}</p>
            </td>
          </tr>
          <tr>
            <th>
              <b>Name of the patient:</b>
            </th>
            <td>
              <p>{this.props.profile.firstName}</p>
            </td>
            <td>
              <p>{this.props.profile.lastName}</p>
            </td>
          </tr>
          <tr>
            <th>
              <b>Date of birth:</b>
            </th>
            <td className="form-group">
              <select className="form-control" id="month" value={this.state.month}>
                <option style={{backgroundColor:'#FFE5C6',border:'0px'}}>MM</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option value={this.state.month} selected>{this.state.month}</option>
              </select>
            </td>
            <td className="form-group">
              <select className="form-control" id="day" value={this.state.day}>
                <option>DD</option>
                <option value="1">1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option value={this.state.day} selected>{this.state.day}</option>
              </select>
            </td>
            <td className="form-group">
              <select className="form-control" id="year">
                <option>YYYY</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option value={this.state.year} selected>{this.state.year}</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <b>Age:</b>
            </th>
            <td>
              <p>{this.state.age}</p>
            </td>
          </tr>
          <tr>
            <th>
              <b>Sex:</b>
            </th>
            <td>
              <input type="radio" id="gender" name="gender" value="Male" checked={this.state.gender === 'Male'} onChange={this.onInputChange}/>
              <label for="M">M</label>
            </td>
            <td>
              <input type="radio" id="gender" name="gender" value="Female" checked={this.state.gender === 'Female'} onChange={this.onInputChange}/>
              <label for="F">F</label>
            </td>
            <td>
              <input type="radio" id="gender" name="gender" value="Other" checked={this.state.gender === 'Other'} onChange={this.onInputChange}/>
              <label for="O">O</label>
            </td>
          </tr>
          <tr>
            <th>
              <b>Mobile phone number:</b>
            </th>
            <td colSpan="2">
              <input
                type="text"
                id="mob"
                name="mob"
                placeholder="Enter phone number"
                className="form-control" value={this.state.mobileNo} onChange={this.onInputChange}></input>
            </td>
          </tr>
          <tr>
            <th>
              <b>VERIFICATION:</b><br/><i style={i2}>(through OTP)</i></th>
            <td colSpan="2">
              <input
                type="text"
                id="verify"
                name="verify"
                placeholder="Enter OTP"
                className="form-control d-inline"/>
              <span className="d-inline">
                <Link>
                  <i style={i}>send OTP</i>
                </Link>
              </span>
            </td>
          </tr>
          <tr>
            <th>
              <b>E-mail:</b>
            </th>
            <td colSpan="2">
              <input type="text" placeholder="Enter e-mail" className="form-control" value={this.state.emailId}/>
            </td>
          </tr>
          <tr>
            <th>
              <b>E-MAIL VERIFICATION:</b><br/><i style={i2}>(OPTIONAL)(through OTP)</i></th>
            <td colSpan="2">
              <input
                type="text"
                id="verifyemail"
                name="verifyemail"
                placeholder="Enter OTP"
                className="form-control"/>
              <span className="d-inline">
                <Link>
                  <i style={i}>send OTP</i>
                </Link>
              </span>
            </td>
          </tr>
        </table>
        <table className={Styles.table2}>
          <tr>
            <th>
              <b>Family group name:</b>
            </th>
            <td><p>ABC</p></td>
          </tr>
          <div>
          <tr>
            <td colSpan="3" style={{
              textAlign: "center"
            }}>
              <button type="button" className={Styles.update} onClick={this.handleUpdate}>UPDATE</button>
            </td>
          </tr>
          <tr>
            <th>
              <label for="checkbox" style={{fontSize:'12px',color:'#858585',textDecoration:'underline',
              fontFamily:'Overpass'}}>Agreement Terms and condition</label>
            </th>
            <td><input type="checkbox" id="checkbox" name="TandC"/></td>
          </tr>
          <tr>
            <th>
              <label for="checkbox2" style={{fontSize:'12px',color:'#858585',textDecoration:'underline',
              fontFamily:'Overpass'}}>Terms of privacy</label>
            </th>
            <td><input type="checkbox" id="checkbox2" name="TofP"/></td>
          </tr>
          <tr>
            <th>
              <label for="idoc" style={{fontSize:'12px',color:'#858585',textDecoration:'underline',
              fontFamily:'Overpass'}}>idocloc.com will share call details<br/>by SMS/E-MAILS</label>
            </th>
            <td><input type="checkbox" id="idoc" name="idoc"/></td>
          </tr>
          </div>
        </table>
      </form>
    </React.Fragment>
  )
}
}
const mapStateToProps = (state) =>{
  return{
      auth : state.auth,
      profile: state.profile

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      updateProfile: (proData) => dispatch(updateProfile(proData)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Professional);