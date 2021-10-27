import React,{Component} from "react";
import {Link} from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './navbarUtils';

class Navbar extends Component{
    render(){
        return(
            <>
      <Nav>
        <Bars />  
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
         </NavLink>          
        <NavLink to='/login' activeStyle>
            Login
        </NavLink>          
        <NavLink to='/register' activeStyle>
            Register
        </NavLink>          
        </NavMenu>
      </Nav>
    </>
        ) 
    }
}

export default Navbar;