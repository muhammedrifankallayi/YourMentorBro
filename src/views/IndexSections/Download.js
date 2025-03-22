
import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
              <h2 className="display-3">
  Empower Your Future Through Education{" "}
  <span className="text-success">
    Start Your Journey Today
  </span>
</h2>
<p className="lead">
  Knowledge is the foundation of success. Invest in yourself by learning new skills and building a brighter future. Take the first step towards achieving your dreams with us.
</p>

          
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Available Stacks 
                  </h4>
                  <Row className="justify-content-center">
             
              
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        React - A JavaScript library for building user
                        interfaces
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-angular?ref=adsr-landing-page"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Angular - One framework. Mobile & Desktop
                      </UncontrolledTooltip>
                    </Col>
             
                    <Col lg="2" xs="4"   style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        Python - Fastest Technology for buiding web Backends
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
