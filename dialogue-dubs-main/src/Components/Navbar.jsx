import React from 'react';
import "./Styles/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand " href="/" style={{color:"blue",fontWeight:"bold"}}>
      <img src="https://cdn-icons-png.flaticon.com/512/1693/1693746.png" alt="icon" style={{height:"70px",width:"70px"}}/>
      Dialogue Dubs</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto ml-auto" >
        <li className="nav-item active">
          <a className="nav-link" href="/" style={{marginRight:"20px",color:"blue",fontWeight:"bold",fontSize:"18px"}}>Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/features" style={{marginRight:"20px",color:"blue",fontWeight:"bold",fontSize:"18px"}}>Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pricing" style={{marginRight:"20px",color:"blue",fontWeight:"bold",fontSize:"18px"}}>Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
     <a href='/demo' ><button className='btn btn-primary'>Demo</button>  </a>
      </span>
    </div>
  </nav>
  );
};

export default Navbar;
