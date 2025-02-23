import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is a very good project. Learn more and grow</h2>
      
      <UserClass name={"Saurav Kunr"} Location={"Butwal"}/>
      <UserClass name={"Samir Kunwar"} Location={"Butwal"}/>
    </div>
  )
}

export default About;
