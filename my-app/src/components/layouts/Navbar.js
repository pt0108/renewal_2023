import Container from 'react-bootstrap/Container';
import SideTab from '../SideTab';
import { Link } from 'react-scroll';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/Navbar.css';

function Navbar() {
  return (
    <Container id="nav-bar">
      <Row id="nav-bar-link">
        <Col sm={1}>
          <img src="img/logo.svg" alt="logo icon" style={{ height: "60px", marginTop: "10px" }} />
        </Col>
        <Col sm={10} style={{ textAlign: "center"}}>
          <Link to="Main" smooth={true} offset={-70}>
            <span>MAIN</span>
          </Link>
          <Link to="About" smooth={true} offset={-70}>
            <span>ABOUT</span>
          </Link>
          <Link to="Works" smooth={true} offset={-70}>
            <span>WORKS</span>
          </Link>
          <Link to="Contact" smooth={true} offset={-70}>
            <span>CONTACT</span>
          </Link>
        </Col>
        <Col sm={1}>
          <SideTab />
        </Col>
      </Row> 
    </Container>
  );
}

export default Navbar;