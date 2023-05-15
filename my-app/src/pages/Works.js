import { Container } from "react-bootstrap";
import '../styles/Works.css';

function Works() {
    return (
        <Container id="Works" style={{ minHeight: "100vh"}}>
            <h2 className="page-title">WORKS</h2>
            <Container id="works-contents">
                <Container className="works-content">
                    <img className="works-content-img" src="img/works1.png" alt="2022 자기소개 포트폴리오 사이트 썸네일" />
                    <h5 className="works-content-heading">2022 자기소개 사이트</h5>
                    <ul className="works-content-ul">
                        <li>- HTML5, CSS3, jQuery</li>
                        <a href="https://pt0108.github.io/MY-PORTFOLIO/" target="_blank" rel="noopener noreferrer"><li>- Link</li></a>
                        <a href="https://github.com/pt0108/MY-PORTFOLIO" target="_blank" rel="noopener noreferrer"><li>- Github Link</li></a>
                    </ul>
                </Container>
                <Container className="works-content">
                    <img className="works-content-img" src="img/works2.png" alt="피그마 포트폴리오 어플 썸네일" />
                    <h5 className="works-content-heading">Figma 자기소개 어플</h5>
                    <ul className="works-content-ul">
                        <li>- Figma</li>
                        <a href="https://www.figma.com/proto/Q4l9d0bi4CstzdyCHyrEPc/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%2Fartwork%EC%95%B1?page-id=0%3A1&type=design&node-id=106-68&viewport=1731%2C1617%2C0.88&scaling=scale-down&starting-point-node-id=27%3A16" target="_blank" rel="noopener noreferrer"><li>- Figma Link</li></a>
                    </ul>
                </Container>
                <Container className="works-content">
                    <img className="works-content-img" src="img/works3.png" alt="스윙 코치 프로젝트 사이트 썸네일" />
                    <h5 className="works-content-heading">스윙코치 서비스 <br/>프로젝트</h5>
                    <ul className="works-content-ul">
                        <li>- HTML5, CSS3, Javascript, React.js</li>
                        <a href="https://frozenpotato.notion.site/Final-Project-Front-End-c0562e0f9c6b4f1697648c069e99371d" target="_blank" rel="noopener noreferrer"><li>- Notion Link</li></a>
                        <a href="https://github.com/HyoJoon-Yang/UJS" target="_blank" rel="noopener noreferrer"><li>- Github Link</li></a>
                    </ul>
                </Container>
                <Container className="works-content">
                    <img className="works-content-img" src="img/works4.png" alt="2023 포트폴리오 사이트 썸네일" />
                    <h5 className="works-content-heading">2023 포트폴리오</h5>
                    <ul className="works-content-ul">
                        <li>- HTML5, CSS3, Javascript, React.js</li>
                        <li>- Link</li>
                        <a href="https://github.com/pt0108/renewal_2023" target="_blank" rel="noopener noreferrer"><li>- Github Link</li></a>
                    </ul>
                </Container>
            </Container>
            <div className="works-bg"></div>
        </Container>
    );
}

export default Works;