import Container from 'react-bootstrap/Container';
import SideTab from '../SideTab';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/TopNavbar.css';

function TopNavbar() {
  return (
    <Container id="nav-bar">
      <Navbar fixed="top">
        <Container>
          <img alt="logo svg" src="img/logo.svg" height="100%" className="d-inline-block align-top" id="logo-img" />{' '}
          <Container style={{ width: "440px", margin:"auto" }}>
            <Link to="Main" offset={-100}>
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
          </Container>
          <SideTab />
        </Container>
      </Navbar>
    </Container>
  );
}

export default TopNavbar;