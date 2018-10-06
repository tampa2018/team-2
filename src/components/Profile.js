import React, { Component } from 'react';
const axios = require('axios');

class Profile extends Component {

  componentDidMount(){
    axios.get('http://127.0.0.1:5000/user')
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    }

  render() {
    return (
      <div>
        <p>Hello from Profile Page</p>
        <div>
          First Name:<br></br>
          <input type="text" value="First"></input><br></br>
          Last Name:<br></br>
          <input type="text" value="Last"></input><br></br>
          Email:<br></br>
          <input type="text" value=""></input><br></br>
          Address:<br></br>
          <input type="text" value=""></input><br></br>
          City:<br></br>
          <input type="text" value=""></input><br></br>
          State:<br></br>
          <input type="text" value="FL"></input><br></br>
          ZIP:<br></br>
          <input type="number" value=""></input><br></br>
          Income:<br></br>
          <input type="text" value=""></input><br></br>
          Education:<br></br>
          <input type="text" value=""></input><br></br>
          Children:<br></br>
          <input type="number" value=""></input><br></br>
      </div>
    </div>
    );
  }
}

export default Profile;
