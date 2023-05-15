import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';
import '../styles/SideTab.css';

function SideTab() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow} id="side-btn">
        <img src="img/side_btn.svg" alt="side tab button" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'} id="side-tab">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ opacity:"0" }}>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="offcanvas-body-link">
            <Link to="Main"  offset={-500}>
              <span>MAIN</span>
            </Link>
            <Link to="About" offset={-100}>
              <span>ABOUT</span>
            </Link>
            <Link to="Works" offset={-100}>
              <span>WORKS</span>
            </Link>
            <Link to="Contact" offset={-100}>
              <span>CONTACT</span>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideTab;