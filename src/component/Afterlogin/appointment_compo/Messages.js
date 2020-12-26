import React from 'react';

const Messages = () => {
  const table = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '100',
    textAlign: 'center'
  }
  const tdstart = {
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    paddingLeft: '10px',
    color: '#5B5B5B',
    fontWeight:'700'
  }
  const tdend = {
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px'
  }
  const allcolor = {
    color: '#858585',
    textAlign: 'center'
  }
  const tr1 = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '100',
    textAlign: 'center'
  }
  return (
    <div className="msgTable">
      <table style={table}>
        <thead style={tr1}>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Sender</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr style={allcolor}>
            <td style={tdstart}>
              14/01/2020
            </td>
            <td>Follow-up reminder</td>
            <td>
                <b style={{
                  color: '#5b5b5b',
                  fontSize:'14px'
                }}>Dr.Ruby Perrin</b>
                <br/>
                <b style={{
                  fontWeight: 300,
                  fontSize:'14px',
                }}>Dermatologist</b>
            </td>
            <td style={tdend}>
              <div
                style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}>
                <p  className="m-0 p-0"
                  style={{
                  width: '350px',
                  textAlign: 'justify',
                  marginBottom: '0px',
                  fontSize:'13px',
                  height:'50px',
                  overflow:'hidden',
                  fontFamily:'Poppins',
                  color:'#5B5B5B',
                  fontWeight:'300'
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum
                  ligula.
                </p>
                <a className="btn btn-primary msgvwbtn">view</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Messages
