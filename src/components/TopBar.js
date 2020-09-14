import React from 'react';
import logo from '../Assets/logo-chaordic.png';
import {
  NavbarBrand,
  Nav,
} from 'reactstrap';// import { throttle } from 'throttle-debounce';


export const TopBar = (props) =>{


  return (
    <Nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container" id="navDiv">
        <NavbarBrand href="/">
          <img
            src={logo}
            className="align-top"
            alt="chaordic logo"
          />
        </NavbarBrand>

      </div>
    </Nav>



  );



}

export default TopBar;
