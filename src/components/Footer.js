import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Akshata Bhat</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Akshata</h3>
        </Col>
        <Col md="4" className="footer-body">
        <h3> akshatavidisha@gmail.com</h3>

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
