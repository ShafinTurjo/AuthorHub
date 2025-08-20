import React from 'react';
import { Card } from 'react-bootstrap';
import ProfileImage from '../Assets/Profile.jpg';

function Profile() {
  return (
    <Card className="m-3">
      <Card.Body>
        <div className="tile">
          <img
            src={ProfileImage} alt="Profile" className="rounded-circle me-3 "width="100" height="100"
          />
          <div>
            <h1>Shafin Tanzier Turjo</h1>
            <p><h3>Email: shafin.cse.20230104132@aust.edu</h3></p>
            <p><h4>Address: House No:380/1, Alamin Road, South Paikpara, Mirpur</h4></p>
            <p>Date Joined: 2023-08-21</p>
          </div>
        </div>
       
      </Card.Body>
    </Card>
  );
}

export default Profile;
