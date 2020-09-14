import React, { Component } from 'react';
import logo from '../Assets/logo-chaordic.png';
import {
  NavbarBrand,
  Nav,
} from 'reactstrap';// import { throttle } from 'throttle-debounce';


export const TopBar = (props) =>{

//export class TopBar extends Component {
  //constructor(props){
    //super(props);

    // this.handleWindowResize = this.handleWindowResize.bind(this);
    //  this.state = { isMobile: VariableStore.isMobile(), dropdownOpen: false }

  //}

  // DESCOMENTAR CODIGO ABAIXO E ACIMA PARA MOBILE
  /*handleWindowResize = () => {

    // handling window resizing with throttle
   throttle(200,
      // responsivity achieved through checking for window size
      // send data through VariableActions for global broadcasting

      VariableActions.setMobile(window.innerWidth < 800)
      //this.setState({ isMobile: window.innerWidth < 880 }
    );
   console.log(this.state.isMobile);
 }*/

 /*
 componentWillMount(){

    // subscribe to VariableStore change of screen
    VariableStore.on("screen-size-change", () =>{
      this.setState({
        isMobile: VariableStore.isMobile()
      });
    });
  }

  // remove listeners
  componentWillUnMount(){
    window.removeEventListener('resize', this.handleWindowResize);
    Events.scrollEvent.remove('being');
    Events.scrollEvent.remove('end');

  }
 */




  const divStyle = {
    color : 'white'
  }

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
