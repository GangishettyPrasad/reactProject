import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function SideBar({sidebarData}) {
	
  return (
	<>
    {sidebarData ? (<div >
	  <Nav defaultActiveKey="/home" className="flex-column bg-dark sidebarWidth p-5 " >
      {/* <Nav.Link to="MainComponent">Dashboard</Nav.Link> */}
	  <Link to='/MainComponent' className='text_decoration mb-2' >Dashboard</Link>
      <Link to="/SubContent" className='text_decoration mb-2'>SubContent</Link>
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
