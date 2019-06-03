import React from 'react';
import { NavLink} from 'react-router-dom';
import {Nav, NavItem, Navbar,NavbarBrand, Collapse, NavbarToggler} from 'reactstrap';
import './../styles/Navigation.css';


const  Navigation =(props)=>(

        <div>   
          <Navbar  expand="md">
          <NavbarBrand href="/"> <img src="https://i.ibb.co/HNd0ttQ/LogoEly.png" alt="LogoEly"  className="logo"></img></NavbarBrand>
                  
            <Nav className="ml-auto text-nav" navbar>               
                
                <NavItem className = "link-nav"><NavLink to="/"><li className=" text-nav">HOME</li></NavLink></NavItem>
                <NavItem><NavLink to="/About"><li className="ml-auto text-nav">SOBRE MI</li></NavLink></NavItem> 
                <NavItem><NavLink to="/Portafolio" className="ml-auto text-nav"><li>PORTAFOLIO</li></NavLink></NavItem>
                <NavItem><NavLink to="/Contact" className="ml-auto text-nav"><li>CONTACTO</li></NavLink></NavItem>
                                
            </Nav>         
           
          </Navbar>       
           
           
            {props.children}
         </div>             
       
    

)


export default Navigation;
     
