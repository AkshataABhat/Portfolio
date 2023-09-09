import React from "react";
import Card from 'react-bootstrap/Card';
import ProjectCard from "../Projects/PubCards";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import maze from "../../Assets/Projects/maze.jpg";
import water from "../../Assets/Projects/water.jpg";
import cov from "../../Assets/Projects/cov.png";
import emo from "../../Assets/Projects/emo.jpg";


function About() {
  return (
    
    <Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        My Research <strong className="purple">Projects </strong>
      </h1>
      <p style={{ color: "white" }}>
      I am extremely interested in research. Here are a few publications.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={maze}

            isBlog={false}
            title="Generating and solving mazes using Parallel Minimum Spanning Tree algorithms"
            description="Generated mazes using MST algorithms and solved it using Djikstras algorithm. All the algorithms were
parallelized using OpenMP and achieved an increase of 68% in efficiency over serial implementation. I presented this paper at SmartTechCon '23."
            link="https://drive.google.com/file/d/1yBcugbRtjI70xLGAbiz8yltkrwIEAOZF/view?usp=sharing"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={water}

            isBlog={false}
            title="Predictive Modelling of Water Potability using Ensemble Machine Learning Algorithms"
            description="Implemented a custom stacking based ensemble model to predict water potability. Proposed model achieved an
accuracy of 84.5%. Paper accepted at Technoscape '23."

          />
        </Col>

        

        <Col md={4} className="project-card">
          <ProjectCard
          imgPath={emo}
            isBlog={false}
            title="Real Time Bimodal Emotion Recognition using Hybridized Deep Learning Techniques"
            description="Implemented a CNN-LSTM and Multi-layer Perceptron model for bimodal emotion detection from video and
audio data. Achieved an accuracy of 79.34 % and 77.27% in comparison to existing models. Paper
under review at ICMLDE 2023."
          
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
          imgPath={cov}
            isBlog={false}
            title="COVID-19 detection using novel VGG-ResNet model"
            description="I developed a hybrid VGG-ResNet model with 93.67% accuracy for detecting COVID-19 from X-ray images and am currently working on a research paper proposing this novel approach."
           
          />
        </Col>


       
        
      </Row>
    </Container>
  </Container>

  
  
  

  );
}

export default About;
