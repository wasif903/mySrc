import React from "react";
import { NavLink } from "react-router-dom";



const Home = () => {
  return (
    <div>
    <div>
        <ul style={{display: 'flex', listStyle: 'none',}}>
            <li style={{margin: '10px'}}><NavLink to='/'>Home</NavLink> </li>
            <li style={{margin: '10px'}}><NavLink to='/login'>Login</NavLink> </li>
            <li style={{margin: '10px'}}><NavLink to='/register'>Register</NavLink> </li>
        </ul>
    </div>

      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
