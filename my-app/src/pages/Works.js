import { Container } from "react-bootstrap";
import '../styles/Works.css';

function Works() {
    return (
        <Container id="Works" style={{ minHeight: "100vh"}}>
            <h2 className="page-title">WORKS</h2>
            <Container id="works-contents">
                <Container className="works-content"></Container>
                <Container className="works-content"></Container>
                <Container className="works-content"></Container>
                <Container className="works-content"></Container>
            </Container>
            <div className="works-bg"></div>
        </Container>
    );
}

export default Works;