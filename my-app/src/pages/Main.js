import { Container } from "react-bootstrap";
import '../styles/Main.css';

function Main() {
    return (
        <Container id="Main" style={{ minHeight: "100vh"}}>
            <div className="main-bg">
                <span>안녕하세요,</span>
                <span>웹 퍼블리셔를 꿈꾸는 <br/> 이재영입니다.</span>
            </div>
        </Container>
    );
}

export default Main;