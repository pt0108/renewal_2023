import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
            <span>MAIN</span>
            <span>ABOUT</span>
            <span>WORKS</span>
            <span>CONTACT</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideTab;