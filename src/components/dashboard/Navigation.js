import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
  } from "react-router-dom";
  import MainComponent from './MainComponent';
import SubContent from "./SubContent";
function Navigation() {
	const [sidebarData, setSidebarData] = useState(true);
	
	const sidebar = ()=>{
    setSidebarData(!sidebarData);
	
	
	}
  return (
	<> 
	<div>
	   <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><AiOutlineMenu onClick={ () => sidebar()}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
	</div>
	<SideBar  sidebarData={sidebarData}/>
	
	
	</> 
  );
}

export default Navigation;
