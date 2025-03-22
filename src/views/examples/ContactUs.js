import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import "./ContactUs.css"
import classnames from "classnames";
import {

    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";
import CardsFooter from 'components/Footers/CardsFooter';
import { socailMediaLinks } from 'assets/data-sets/socialMedia';

function ContactUs() {
  return (
  <div>

<DemoNavbar/>

<div>



<section className=""   style={{marginTop:"110px"}} >
            <Container>
              <Row className="top-column  bg-gradient-secondary shadow">

              <Col className='topcol'  style={{display:"flex" ,alignItems:"flex-start",justifyContent:"center"}} >
                <div className='cont-card-1'  >
                <div class="container my-5">
    <div class="contact-card text-center mx-auto p-4">
      <h1>Contact Us</h1>
      <p class="mt-3">
        Get in touch with us social Media
      </p>
      <div class="mt-4">
        {/* <p class="d-flex align-items-center justify-content-center">
          <i class="bi bi-geo-alt-fill me-3"></i>
          <span>
            1st Floor, Ilaann Arcade, NH-Silkpalam Road, Vazhayur, Kozhikode,
            Kerala, India, 673633
          </span>
        </p> */}
        <p class="d-flex align-items-center justify-content-center">
          <i class="bi bi-envelope-fill me-3"></i>
          <span>Email: <a href="mailto:mentorbroconnect@gmail.com">mentorbroconnect@gmail.com</a></span>
        </p>
        <p class="d-flex align-items-center justify-content-center">
          <i class="bi bi-telephone-fill me-3"></i>
          <span>Call Us Anytime: <a href="tel:+919207998855">+91 8157867616</a></span>
        </p>
      </div>
      <div class="social-icons mt-4">
        <a href={socailMediaLinks?.whatsApp} aria-label="Facebook"><i class="bi bi-whatsapp"></i></a>
        {/* <a href={socailMediaLinks?.LinkedIn} aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a> */}
        <a href={socailMediaLinks?.youtube} aria-label="YouTube"><i class="bi bi-youtube"></i></a>
        <a href={socailMediaLinks?.instagram} aria-label="Instagram"><i class="bi bi-instagram"></i></a>
      </div>
    </div>
  </div>

</div>

                </Col>




                <Col lg="6">
                  <Card className="custom-design">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to Contact with us?</h4>
                      <p className="mt-0">
                       Fill the form we will reach out to you very shortly
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                        
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            name="Name"
                          
                          
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            name="Email"
                            type="email"
                          
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="Mobile"
                          placeholder="Mobile"
                       
                          
                      
                        />
                      </FormGroup>
                      <div>
                        <Button  
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
               
              </Row>
            </Container>




          </section>


</div>
 <CardsFooter />
  </div>
  )
}

export default ContactUs