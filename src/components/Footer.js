import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.png';
import navIcon3 from '../assets/img/icon5.png';
import img1 from '../assets/img/keeanbyrne-icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={img1} alt="Keean Byrne" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/keean-byrne-98598021b/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/KeeanByrne"><img src={navIcon2} alt="GitHub" /></a>
                <a href="mailto:keeanbyrne00@gmail.com"><img src={navIcon3} alt="keeanbyrne00@gmail.com" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}