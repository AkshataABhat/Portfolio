import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am an ambitious and forward-thinking individual driven by my unwavering passion for technology. With a keen interest in computer science, I constantly seek opportunities to explore new frontiers and challenge conventional boundaries. My ultimate ambition is to leverage advanced technologies, such as deep learning and artificial intelligence, to revolutionize industries and make a positive impact on society. Through continuous learning, innovation, and dedication, I aim to be at the forefront of technological advancements, shaping the future of technology and creating transformative solutions that address real-world challenges.           
            </p>
          
          
          
            <p className="home-about-body">
            Furthermore, I am set to graduate in 2024, and I am actively seeking full-time roles as a software engineer, data analyst, or data scientist. I am excited to apply my skills, knowledge, and passion to real-world projects and contribute to the development of cutting-edge technologies. With a strong foundation in computer science and a track record of success in research and industry internships, I am confident in my ability to make valuable contributions to any organization. I am eager to join a dynamic team that values innovation, collaboration, and continuous learning, where I can further enhance my expertise and drive meaningful change in the field.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACTS</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AkshataABhat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/bhat20_bhat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akshata-bhat-342a261bb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
