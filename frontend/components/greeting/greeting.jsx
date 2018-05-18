import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {


  // const sessionLink = () => (
  //       <div>
  //
  //         <Link to="/login">Login</Link>
  //         <Link to="/signup">SignUp</Link>
  //       </div>
  //   );
  //
  //
  // const personalGreeting = () => (
  //     <div>
  //       <h1>Welcome, {currentUser.username}</h1>
  //       <button onClick={logout}>Log Out</button>
  //     </div>
  // );

  if(currentUser) {
    return (<Redirect to='/main'/>)
  } else {
    return (<Redirect to='/login'/>)
  };
};
// ****** might need to come back here

export default Greeting;

//this.logout could end with error
