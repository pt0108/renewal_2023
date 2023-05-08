import { Container } from "react-bootstrap";
import '../styles/Contact.css';

function Contact() {
    return (
        <Container id="Contact" style={{ minHeight: "100vh"}}>
            <h2 className="page-title">CONTACT</h2>
            <Container style={{ border: "1px solid red", marginTop:"60px"}}>
                <Container className="contact-box">
                    <img src="img/calling.gif" alt="calling gif" />
                    <h5>010-7414-3210</h5>
                </Container>
            </Container>
        </Container>
    );
}

export default Contact;