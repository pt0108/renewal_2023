import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../styles/FooterModal.css';

function FooterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p id="footer-modal-trigger" onClick={handleShow}>
        아이콘 출처
      </p>

      <Modal size="lg" id="footer-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="modal-title-circle"></span>
            <span className="modal-title-circle"></span>
            <span className="modal-title-circle"></span>
          </Modal.Title>
        </Modal.Header>
        <hr />
        <Modal.Body>
            <h5>아이콘 출처</h5>
            <ul>
                <a href="https://www.flaticon.com/free-animated-icons/communications" target="_blank" rel="noopener noreferrer"><li>Communications animated icons created by Freepik - Flaticon</li></a>
                <a href="https://www.flaticon.com/free-animated-icons/computer" target="_blank" rel="noopener noreferrer"><li>Computer animated icons created by Freepik - Flaticon</li></a>
                <a href="https://www.flaticon.com/free-animated-icons/phone" target="_blank" rel="noopener noreferrer"><li>Phone animated icons created by Freepik - Flaticon</li></a>
            </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FooterModal;