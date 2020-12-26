import React from 'react';
import Profile from "../../Images/profile_pic.jpg"

const Doctor = () => {
    const img = {
        borderRadius:'50%',
        width:'200px',
        height:'200px',
        border:'5px solid rgba(0, 164, 173, 0.3)'
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 text-center">
                    <label for="file"><img src={Profile} alt="..." style={img} /></label><br/>
                    <label for="file" className="btn editbutton">edit</label>
                    <input type="file" id="file" className="d-none"/>
                    <p className="doctornameandcity">Dr. Schnoopy Bloopers<br/><br/>Newyork, USA</p>
                </div>
            </div>
        </div>
    )
}

export default Doctor;
