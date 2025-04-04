import DemoNavbar from 'components/Navbars/DemoNavbar'
import React, { useState } from 'react'
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
import toast from 'react-hot-toast';
import axios from 'axios';
import Spinner from 'components/Spinners/Spinner';

function ContactUs() {

  const [Name,setName] = useState("")
  const [Mobile,setMobile] = useState("")
  const [Email,setEmail] = useState("")
  const [showLoader,setShowLoader] = useState(false)



 const  handleSubmit  =  async(e) => {
    e.preventDefault();


    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    
    headers.append('GET', 'POST', 'OPTIONS');
    
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Mobile", Mobile);
    formData.append("Email", Email);
    
    
    if (!Name) {
      toast.error("Name is required");
      return;
    }
    if (!Mobile || !/^\d{10}$/.test(Mobile)) {
      toast.error("Valid 10 digit mobile number is required");
      return;
    }
    if (!Email || !/\S+@\S+\.\S+/.test(Email)) {
      toast.error("Valid email is required");
      return;
    }

    setShowLoader(true)
    
    const url = socailMediaLinks.contactusGoogleSheetLink
    
  try {
    await axios.post(`${url}?Name=${Name}&Mobile=${Mobile}&Email=${Email}&page=1`, formData, { headers: headers });
    setShowLoader(false);
    setName("");
    setEmail("");
    setMobile("");
    toast.success("Your response has been sent, our team will contact you shortly");
  } catch (error) {
    setShowLoader(false);
    toast.error("There was an error sending your response. Please try again.");
  }
  }

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
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                          
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
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                          
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="Mobile"
                          placeholder="Mobile"
                          value={Mobile}      
                          onChange={(e) => setMobile(e.target.value)}
                      
                        />
                      </FormGroup>
                      <div>
                        <Button  
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                            onClick={handleSubmit}
                        >
                         {
                                                     showLoader?(
                                                       <Spinner/>
                                                     ):(
                                                      
                                                       <span> Submit</span>
                                                     )
                                                   }
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