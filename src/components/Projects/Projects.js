import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import engage from "../../Assets/Projects/engage.jpg";
import Sahay from "../../Assets/Projects/Sahay.jpg";
import mask from "../../Assets/Projects/Mask_Detector.jpg";
import fire from "../../Assets/Projects/Fire .jpg";


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
              description="Project built for Microsoft Engage 2022 program. Electronic Voting Machine using Face Authentication. (Under development)"
              link="https://github.com/AkshataABhat/Microsoft-Engage-2022"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sahay}
              isBlog={false}
              title="Sahay"
              description="A React and Firebase chat application."
              link="https://github.com/AkshataABhat/Sahay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mask}
              isBlog={false}
              title="Face Mask Detector"
              description="Face Mask Detector built using Machine Learning"
              link="https://colab.research.google.com/drive/1KuI6BjaBsuz8fClweso_c2aNgqmSPezl?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fire}
              isBlog={false}
              title="Wildfire Detector"
              description="Real time wildfire detector built using NASA API"
              link="https://github.com/AkshataABhat/Wildfire-Tracker"
            />
          </Col>


         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
