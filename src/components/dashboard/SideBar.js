import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function SideBar({sidebarData}) {
	
  return (
	<>
    {sidebarData ? (<div >
	  <Nav defaultActiveKey="/home" className="flex-column bg-dark sidebarWidth" >
      {/* <Nav.Link to="MainComponent">Dashboard</Nav.Link> */}
	  <Link to='/MainComponent' >Dashboard</Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
	  <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
	</div>) : (<></>)}
	</>
  );
}

export default SideBar;
