import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";
function MainComponent() {
	const [sidebarData, setSidebarData] = useState(false);
	
	const sidebar = ()=>{
    setSidebarData(!sidebarData);
	}
  return (
	<div>
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
	  <div>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... be distracted by the readable content of a page when looking at its layout.
		</p>
		
	  </div>
	</div>
  );
}

export default MainComponent;
