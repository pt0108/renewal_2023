import Container from 'react-bootstrap/Container';
import FooterModal from '../FooterModal';
import '../../styles/Footer.css';

function Footer() {
  return (
    <Container id="footer">
      <Container id="footer-content">
        <p>Copyright © 2023 LeeJaeyoung Allrights reserved. | </p>
        <FooterModal />
      </Container>
    </Container>
  );
}

export default Footer;