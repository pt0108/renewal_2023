import { Container } from "react-bootstrap";
import '../styles/Contact.css';

function Contact() {
    return (
        <Container id="Contact" style={{ minHeight: "80vh"}}>
            <h2 className="page-title">CONTACT</h2>
            <Container id="contact-contain" className="row justify-content-between">
                <Container className="contact-box">
                    <img src="img/calling.gif" alt="phone number" />
                    <h5>010-7414-3210</h5>
                </Container>
                <Container className="contact-box">
                    <img src="img/letter.gif" alt="email" />
                    <h5>pt0108@naver.com</h5>
                </Container>
                <Container className="contact-box">
                    <a href="https://github.com/pt0108" target="_blank" rel="noopener noreferrer">
                        <img src="img/browser.gif" alt="github link" />
                        <h5>https://github.com/pt0108</h5>
                    </a>
                </Container>
            </Container>
        </Container>
    );
}

export default Contact;