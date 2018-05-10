import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {


  const sessionLink = () => (
        <div>
          <h1>Login or SignUp</h1>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
    );


  const personalGreeting = () => (
      <div>
        <h1>Welcome, {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
  );

  if(currentUser) {return personalGreeting()} else { return sessionLink()};
};


export default Greeting;

//this.logout could end with error
