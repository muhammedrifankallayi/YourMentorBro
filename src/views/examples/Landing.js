import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import React,{createRef, useState} from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import WebinarForm from "views/Modals/WebinarForm.js"; 
import ContactForm from "views/Modals/ContactForm.js";
import axios from "axios";
import WhoAreWe from "../../assets/Lottie-Files/whoarewe.json";
import robo from "../../assets/Lottie-Files/robot.json";
import howToJoin_Ani from "../../assets/Lottie-Files/thinkman.json"; 
import filltheform_Ani from "../../assets/Lottie-Files/filltheform.json"; 
import Entroll_Ani from "../../assets/Lottie-Files/enrollnow.json"; 
import thinkInTable from "../../assets/Lottie-Files/think-on-table.json"; 
import communicationLottie from "../../assets/Lottie-Files/communication.json"; 
import bottomArrow from "../../assets/Lottie-Files/bottonArrow.json"; 
import weWillCallYouBack_Ani from "../../assets/Lottie-Files/weWillCallYouBack.json"; 
import "./Landing.css"
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import toast from "react-hot-toast";
import Spinner from "components/Spinners/Spinner";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { socailMediaLinks } from "assets/data-sets/socialMedia";

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showContactModal:false,
      Name: "",
      Mobile: "",
      Email: "",
      showLoader:false
    };

    this.videoRef = createRef();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
  };

  handleSubmit  =  async(e) => {
    e.preventDefault();

    let {Name, Email, Mobile} = this.state;

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

    this.setState({showLoader:true})
    
    const url = socailMediaLinks.contactusGoogleSheetLink
    
    await axios.post(`${url}?Name=${Name}&Mobile=${Mobile}&Email=${Email}&page=1`,formData,
      { headers: headers}
    ).then((res)=>{
      this.setState({showLoader:false})
      this.resetState()
    toast.success("Your response has been sent, our team will contact you shortly")
   })
  }

  resetState = () => {
    this.setState({
      showModal: false,
      showContactModal: false,
      Name: "",
      Mobile: "",
      Email: "",
      showLoader: false
    });
  };

  facultyData = [
    {
      name:"Radwan Rashiq",
      job_title:"Full Stack Developer at Infosys and Founder of Mentor Bro",
      img:require("assets/img/theme/team-1-800x800.jpg")
    },
    {
      name:"Radwan Rashiq",
      job_title:"Full Stack Developer at Infosys and Founder of Mentor Bro",
      img:require("assets/img/theme/team-1-800x800.jpg")
    },
    {
      name:"Radwan Rashiq",
      job_title:"Full Stack Developer at Infosys and Founder of Mentor Bro",
      img:require("assets/img/theme/team-1-800x800.jpg")
    },
    {
      name:"Radwan Rashiq",
      job_title:"Full Stack Developer at Infosys and Founder of Mentor Bro",
       img:require("assets/img/theme/team-1-800x800.jpg")
    },
  ]


  openGoogleForm = (e)=>{
    e.preventDefault();
   
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSclBWzfoXyMZuKnr3rxDikG4pr7neDF1t5didxx5Rsh7ZbViw/viewform","_blank")
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };
  toggleContactModal = () =>{
    this.setState((prevState)=>({
      showContactModal:!prevState.showContactModal
    }))
  }
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    if (this.videoRef.current) {
      this.videoRef.current.play();
    }
  }
  

  render() {
    return (
      <>
    <Helmet>
    <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-96x96.png" sizes="96x96" />
    <title>Mentor Bro</title>
    <meta name="description" 
content="Mentor Bro is a leading software training institute offering affordable online courses in web development and app development. Learn coding the easy way with expert industry mentors." />
    </Helmet>
        <div className="spinner-top">
          {this.state.showLoader && <Spinner />}
        </div>
        <div className="main-page">
          <DemoNavbar />
        </div>
        <main ref="main">
          <div className="position-relative"  style={{marginTop:"20px"}}  >
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
             <video
              ref={this.videoRef}
                preload="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                  }}
                >
                  <source src={require("../../assets/videos/3130284-uhd_3840_2160_30fps.mp4")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
        
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Unlock Your Potential{" "}
                        <span>With Personalized Mentorship</span>
                      </h1>
                      <p className="lead text-white">
                        Guiding You with Proven Methods, Practical Insights, and One-on-One Support to Achieve Your Goals Faster
                      </p>
                      <div className="btn-wrapper">
                        <ContactForm isOpen={this.showContactModal} onClose={this.toggleContactModal} />
                        {/* <WebinarForm isOpen={this.showModal} onClose={this.toggleModal} /> */}
                        <Button   onClick={()=>window.location.href = '/pre-test'} >       
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-hat-3" />
                          </span>  Appy For Pre-test
                          </Button>
                      </div>
                    </Col>
                    <Col  lg="6" >
                    
                    <Lottie  animationData={robo} />
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200 course-cards section-one"  >
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-muted rounded-circle mb-4" style={{border:"1px solid #5e72e4"}}  >
                            {/* <i className="ni ni-check-bold" /> */}
                            <img  height={"25px"} width={"25px"} src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" ></img>
                          </div>
                          <h6 className="text-primary text-uppercase">
                           M E R N
                          </h6>
                          <p className="description mt-3">
                          Join our 8-month mentorship program and become an expert in the MERN stack 
                          (MongoDB, Express.js, React.js, Node.js). Learn to build full-stack web applications 
                          from scratch, mastering both front-end and back-end development. The course includes in-depth 
                          training on data structures and algorithms, real-world project building, and industry best practices
                           to prepare you for job interviews and a successful tech career.
                          </p>
                    
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={this.openGoogleForm}
                          >
                            Enroll Now 
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape rounded-circle mb-4" style={{border:"1px solid #2dce89"}} >
                            {/* <i className="ni ni-istanbul" /> */}
                            <img  height={"25px"} width={"25px"} src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000" ></img>
                          </div>
                          <h6 className="text-success text-uppercase">
                         M E A N
                          </h6>
                          <p className="description mt-3">
                          Prepare for a rewarding career in web development with our 8-month mentorship program focused on the MEAN stack 
                          (MongoDB, Express.js, Angular, Node.js). This course offers comprehensive training in building scalable web applications, 
                          combined with data structures, algorithms, and advanced problem-solving techniques.
                           Designed to help you crack job interviews, this program ensures you're industry-ready.
                          </p>
                        
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={this.openGoogleForm}
                          >
                    Entroll Now
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape rounded-circle mb-4" style={{border:"1px solid #fb6340"}}>
                            {/* <i className="ni ni-planet" /> */}
                            <img  height={"25px"} width={"25px"} src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" ></img>
                            
                          </div>
                          <h6 className="text-warning text-uppercase">
                           Python DJango
                          </h6>
                          <p className="description mt-3">
                          This 8-month mentorship program equips you with the skills to excel in Python development, focusing on the Django framework. 
                          Learn to build robust web applications, design efficient databases, and solve complex problems using data structures and algorithms. 
                          With personalized guidance, real-world projects, and job-oriented training,
                           you'll be ready to secure a role in Python-driven industries.
                          </p>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={this.openGoogleForm}
                          >
                            Entroll Now
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
           <div style={{width:"100%",display:"flex",justifyContent:"center"}} >
           <Lottie style={{width:"100px",height:"180px"}}  animationData={bottomArrow}  />
           </div>
          </section>

          <section  style={{marginBottom:"10px",background:"#f4f5f7",padding:"20px",marginTop:"10px"}} >
<Container>

<Row  className="row-grid align-items-center" >

<Col  className="order-md-2" md="5" style={{display:"flex",justifyContent:"center",alignContent:"center"}} >
<div  className="vid-wrapper"  >
  <iframe style={{borderRadius:"10px"}} width="360" height="350" src="https://www.youtube.com/embed/q83Kv6L2STs?si=MONQnYSzhSo3pmnf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

</Col>

<Col className="order-md-1" md="7" >
<h3>What is Mentor Bro ? How we can help you ?</h3>

<p>Mentor Bro is a mentorship program for technology students. 
  We provide a full-stack development course with mentorship from industry experts at one of the most affordable fees in the entire education industry.
   You can learn more about Mentor Bro by watching the attached video.</p>

</Col>

</Row>

</Container>
            

          </section>





          <section className="section section-lg section-two"  >
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Web Design From Zero to One</h3>
                    <p>
                    We will guide you in learning web design from scratch with our proven pathways.
                     Our mentorship will help you to learn effectively, and through practice,
                     you'll become capable of learning independently without assistance.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Personalized Mentorship
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-bulb-61" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"> Hands-On Tasks
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-planet" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Tech Stack Mastery
                            </h6>
                          </div>
                        </div>
                      </li>

                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            English Language Support
                            </h6>
                          </div>
                        </div>
                      </li>


                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-app" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Resume & Job Application Guidance
                            </h6>
                          </div>
                        </div>
                      </li>


                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    {/* <CardImg
                      alt="..."
                      src={require("assets/img/theme/man-5723449_1920.jpg")}
                      top
                    /> */}
                    <Lottie  width={"100px"} animationData={thinkInTable} />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                      Why Choose Us as Your Mentor?
                      </h4>
                      <p className="lead text-italic text-white">
                      We provide practical tasks each week, empowering you to develop the self-learning 
                      skills needed to master any subject independently in today’s tech-driven world.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" /> 
                    </div> */}
                    <div>
                    <Lottie animationData={WhoAreWe} />
                    </div>
                    <h3>Who Are We?</h3>
                    <p className="lead">
                    We’re not just mentors; we’re your partners in growth, progress, and achievement
                    </p>
                    <p>
                    At  Mentor Bro, we specialize in helping individuals rediscover their passion for coding and career development
                    </p>
                    <p>
                    Our mission is simple: to equip you with the skills, confidence, and mindset needed to forge a successful path in today’s competitive world.
                    </p>

                  
                  </div>
                </Col>
              </Row>
            </Container>
          </section>



     
          <section className="section section-lg section-one"  style={{marginBottom:"0px"}} >
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
            
                  
<div  className="container" style={{display:"flex",justifyContent:"center"}} >
<div  className="lottie-cards"   >
  <Lottie  animationData={howToJoin_Ani} />

  </div>
</div>

<h2 className="display-3">How to Join Mentor Bro</h2>

{/* Step 1 */}

<div  className="container  step-box " >

 <div  className="lottie-content-wrap" >
  
<div >
  <Lottie  style={{width:"130px",height:"130px"}}  animationData={filltheform_Ani} />
  </div>
<div>
<h3 >Step 1 : Fill the <a href="#formContact" >form</a> </h3>
<p>Visit the website & fill out the form with your interested course and contact details.</p>
</div>
 </div>
</div>

{/* step 2 */}

<div  className="container step-box"  >

 <div  className="lottie-content-wrap"   >
  
<div    >
  <Lottie style={{width:"150px",height:"150px"}}  animationData={weWillCallYouBack_Ani} />
  </div>
<div>
<h3 >Step 2 : Recieve a Callback </h3>
<p>Our Course Expert will Contact you back between 10 AM – 7 PM.</p>
</div>
 </div>
</div>

{/*  */}
                  


<div  className="container step-box"  >

 <div  className="lottie-content-wrap"   >
  
<div >
  <Lottie style={{width:"200px",height:"200px"}} animationData={Entroll_Ani} />
  </div>
<div>
<h3 >Step 3 : Enroll </h3>
<p>Explore our Course details, Fee details and get onboard with us.</p>
</div>
 </div>
</div>


                </Col>
              </Row>
            </Container>
          </section>

          <section  className="section section-lg section-interview" style={{backgroundColor:"#f1f1f1cc"}} >
          <Container>
          <Row  className="row-grid"  style={{flexDirection:"row-reverse"}} >



<Col className="order-md-1" md="7" >
<h1>What is the Fee Structure at MentorBro?</h1>  

<p>MentorBro offers courses at highly competitive and affordable prices, ensuring accessibility for all learners. Our programs are designed with a proven industry-relevant syllabus, helping students gain practical skills and expertise. With a commitment to quality education, we provide structured learning paths that align with current industry demands.</p>

</Col>

<Col  className="order-md-2" md="5" style={{display:"flex",justifyContent:"center",alignContent:"center"}} >
<div  className="vid-wrapper"  >
  <iframe style={{borderRadius:"10px"}} width="300" height="310" src="https://www.youtube.com/embed/NHaTNA8c7s8?si=YrG_JjIn3kbHM0p5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

</Col>

</Row>
          </Container>
            </section>  




{/* Get Ready For Interview section */}

<section  className="section section-lg section-interview" >  


<Container>
<Row>
  <Col>
  <div>
  <Lottie  style={{width:"400px",height:"400px"}} animationData={communicationLottie} /> 
</div>
  </Col>
  <Col>
  <h2>Get Ready For Interview</h2>
  <h6>Master key skills, boost confidence, and ace your next job interview with expert tips and guidance.</h6>
  <ul>
    <li> Resume preparation  </li>
    <li> Prepare answers for common questions.  </li>
    <li> Job Application Guidance  </li>
    <li> Mock HR interviews  </li>
    <li> Mock Technical interviews  </li>
  </ul>
  </Col>
</Row>
<Row  className="row-video" >
  <Col> 
  <div  className="vid-wraper" >
  <iframe width="360" height="350" src="https://youtube.com/embed/tFtz7i3-9RM?si=OpABzOJrpJmgXgT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  </Col>
  <Col>
  <div className="vid-wraper" >
  <iframe width="360" height="350" src="https://youtube.com/embed/VweJA6kwnbk?si=Wd8DUd819HEqB9-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  </Col>
  <Col>
  <div className="vid-wraper" >
  <iframe width="360" height="350" src="https://youtube.com/embed/T1PeVldiT2A?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  </Col>
</Row>
</Container>


</section>


          
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Benefits Of Learning with Us</h2>
                  <p className="lead text-white">
                  Empowering You Every Step of the Way
                  Learning to code can be challenging, but you're never in it alone. We provide constant encouragement, personalized motivation, and inspiration to keep you on track, even during the toughest moments. Our mission is to empower you to stay focused and resilient, helping you turn obstacles into opportunities and realize your full potential. Together, we'll keep pushing forward until you reach your goals.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Work at Your Own Pace</h5>
                  <p className="text-white mt-3">
                  Our program is flexible and remote, allowing you to learn from the comfort of your home.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Real-World Experience</h5>
                  <p className="text-white mt-3">
                  The projects we assign are designed to simulate real-world tech challenges, giving you a portfolio that stands out to employers.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Supportive Community</h5>
                  <p className="text-white mt-3">
                  Join a network of like-minded students and mentors who are all here to help you succeed.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section className="section section-lg pt-lg-0 section-contact-us"   >
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5" id="formContact">
                      <h4 className="mb-1">Want to Contact with us?</h4>
                      <p className="mt-0">
                       Fill the form we will reach out to you very shortly
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
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
                           
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                            onChange={this.handleChange}
                            value={this.state.Name}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
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
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                            onChange={this.handleChange}
                            value={this.state.Email}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="Mobile"
                          placeholder="Mobile"
                          onChange={this.handleChange}
                          value={this.state.Mobile}
                      
                        />
                      </FormGroup>
                      <div>
                        <Button  onClick={this.handleSubmit}
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                          style={{display:"flex",justifyContent:"center"}}
                        >
                          {
                            this.state.showLoader?(
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
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
