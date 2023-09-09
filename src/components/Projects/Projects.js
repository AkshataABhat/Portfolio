import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import engage from "../../Assets/Projects/engage.jpg";
import mask from "../../Assets/Projects/hci.png";
import fire from "../../Assets/Projects/Fire .jpg";
import cov from "../../Assets/Projects/cov.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={engage}
              isBlog={false}
              title="Electronic Voting Machine"
              description="This is my project built for Microsoft Engage 2022 program.Electronic Voting Machine using Face Authentication. (Under development). It uses Ethereum, Ganache, Metamask and Python."
              link="https://github.com/AkshataABhat/Microsoft-Engage-2022"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mask}
              isBlog={false}
              title="Mental Health Care website"
              description="This project is a website focusing on mental well-being, offering features such as a mental health chatbot, exercises, games, a blog, tracker, and music player to help adults maintain good mental health."
link="https://drive.google.com/file/d/1fKrv7xcg97jVw-SCGY_unaPXCZbDZS-3/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={cov}
              isBlog={false}
              title="Artify - Image Editing tool"
              description="Developed an image-editing website using OpenCV and Flask. The user can
adjust brightness, saturation, grayscale and perform rotations on the image. The website includes a text-based image
editing interface."
              link="https://akshataabhat.github.io/Artify/templates/about.html#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fire}
              isBlog={false}
              title="Wildfire Detector"
              description="I built a real-time wildfire detector using NASA's API, leveraging satellite data to identify and monitor wildfire occurrences for timely response and mitigation measures."
              link="https://github.com/AkshataABhat/Wildfire-Tracker"
            />
          </Col>


         
          
        </Row>
      </Container>
    </Container>

    
    
  
  );
}

export default Projects;
