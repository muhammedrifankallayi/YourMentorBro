
import React from "react";
import { Link } from "react-router-dom";
import { socailMediaLinks } from "assets/data-sets/socialMedia";
import jumAnimation from "../../assets/Lottie-Files/jump.json";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import "./Footer.scss"
import Lottie from "lottie-react";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Thank you for Visting 
                </h3>
                <h4 className="mb-0 font-weight-light">
                Let's Turn Your Dream Career into Reality.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
            
            <Lottie animationData={jumAnimation}  />
           
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                   
                    target="_blank"
                  >
                  MentorBro LLP All Rights Reserved
                  </a>
                 
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="/about-us"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      
                      target="_blank"
                    >
                    Mentor Bro LLP
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink
                      href="mailto:mentorbroconnect@gmail.com"
                      target="_blank"
                    >
                    mentorbroconnect@gmail.com
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
