import { Container } from "react-bootstrap";
import '../styles/About.css';

function About() {
    return (
        <Container id="About" style={{ minHeight: "100vh"}}>
            <h2 className="page-title">ABOUT</h2>
            <Container className="about-contents">
                <Container className="about-content-left">
                    <p>
                        <b>Name</b>   이재영 <br/>
                        <b>Birthday</b>   2000.01.08 <br/>
                        <b>22.03~22.08</b>   디지털디자인 통합심사과정훈련 <br/>
                        <b>22.09</b>   웹디자인기능사 자격 취득 <br/>
                        <b>22.10~23.04</b>   응용SW엔지니어링 통합심사과정훈련
                    </p>
                </Container>
                <Container className="about-content-right">
                    그래프 자리
                </Container>
            </Container>
        </Container>
    );
}

export default About;