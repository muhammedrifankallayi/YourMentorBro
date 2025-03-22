
import React from "react";

// reactstrap components
import { Container, Row,Card, CardBody,Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

import Lottie from "lottie-react";
import Team  from "../../assets/Lottie-Files/team.json"
import Goal  from "../../assets/Lottie-Files/goal.json"
import QusMark  from "../../assets/Lottie-Files/question-mark.json"


import "./AboutUs.css"

class AboutUs extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">


        <section   className="vision-section" style={{marginTop:"50px",background:"#ededed",paddingTop:"100px"}} >

<Container>
<Row className="justify-content-center">
              <Col className="text-center" lg="12">
          
                <h2 className="display-1">Our Vision </h2>
              <div className="d-flex justify-content-center"  >  <Lottie  style={{width:"200px",height:"200px"}}  animationData={Goal}  /></div>
                <p className="lead"  style={{fontWeight:"500"}}>
                At  Mentor Bro, we know the pain of watching dreams slip away because of financial struggles. Many talented students, full of potential and determination, are forced to give up on their aspirations simply because they cannot afford the right coaching or guidance. We’ve been there, and we understand the frustration, the helplessness, and the fear of a future where opportunities seem out of reach.

This is why  Mentorbro was born – to be a beacon of hope for students who dare to dream despite their hardships. We are committed to providing high-quality coaching and mentorship at a cost every family can afford. We want to ensure that no student is left behind, that no dream is crushed by financial burdens.

At Mentorbro, we don’t just teach – we uplift, inspire, and empower. We believe that every student, no matter their background, deserves the chance to rise above challenges and achieve greatness. Your dreams matter, and we are here to help you make them a reality.
                </p>
          
              </Col>
            </Row>
</Container>


</section>



     
<section   className="top-section container" >

<div  className="content-box" >

<h2 className="display-1 d-flex text-h2" >Who We Are  <Lottie  className="qus-lottie"  animationData={QusMark} />  </h2> 

<p>
We’re not just mentors; we’re your partners in growth, progress, and achievement. At  'Mentor Bro', 
we specialize in helping individuals rediscover their passion for coding and career development.
 Our mission is simple: to equip you with the skills, confidence, and mindset needed to forge a successful path in today’s competitive world.

</p>

</div>

<div className="img-box" >
    {/* <img style={{float:"right"}}  src={require("../../assets/img/about-us/pexels-fauxels-3183197.jpg")} ></img> */}
    <Lottie  animationData={Team} />
</div>

</section>


{/* section 2 */}


{/* <section   className="top-section" >
<div className="img-box" >
    <img style={{float:"left"}}   src={require("../../assets/img/about-us/pexels-fauxels-3228684.jpg")} ></img>
</div>

</section> */}


<section  className="card-section "  >

<div  className="content-box-2 container " >

<h1>What We Offer ? </h1>


</div>

<div class="container">
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <div class="card shadow mini-card">
                <div class="card-body">
                    <h5><i class="ni ni-bell-55"></i> Task-Based Reviews</h5>
                    <p class="description">
                        After every task, our mentors provide detailed feedback, helping you understand your strengths and identify areas for improvement. This ensures you’re constantly growing and honing your skills.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-sm-6">
            <div class="card shadow">
                <div class="card-body">
                    <h5><i class="ni ni-paper-diploma"></i> Expert Coding Guidance</h5>
                    <p class="description">
                        Master industry-relevant tech stacks like MERN, MEAN, Python, and more, with practical, hands-on learning led by experienced professionals.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-sm-6">
            <div class="card shadow">
                <div class="card-body">
                    <h5><i class="ni ni-book-bookmark"></i> Communication and Language Support</h5>
                    <p class="description">
                        Gain fluency and confidence in English to excel in interviews, presentations, and team collaboration.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-sm-6">
            <div class="card shadow">
                <div class="card-body">
                    <h5><i class="ni ni-collection"></i> Resume Building</h5>
                    <p class="description">
                        Craft a standout resume that showcases your skills and experience in the best possible light, helping you stand out to recruiters.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-sm-6">
            <div class="card shadow">
                <div class="card-body">
                    <h5><i class="ni ni-map-big"></i> Dream Job Preparation</h5>
                    <p class="description">
                        Receive personalized guidance to prepare for and crack your dream job. From interview coaching to job application strategies, we’re with you every step of the way.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-sm-6">
            <div class="card shadow">
                <div class="card-body">
                    <h5><i class="ni ni-check-bold"></i> Continuous Support</h5>
                    <p class="description">
                        Stay connected with our mentors through open communication channels. We’re here to help you stay motivated and on track.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


</section>

<section   className="mentor-section" >
<div class="tutors-section">
    <h1>Meet Our Mentors</h1>
    <div class="tutors-container">
      <div class="tutor-card">
        <img  style={{width:"100%",height:'84%'}}  src={require("../../assets/img/reviewer-img/Rashid.jpg")} alt="Tutor Ajas"></img>
        <h2>Rashid</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/Fazil.jpg")} alt="Tutor Suhail"></img>
        <h2>Fazil</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/Abbas.jpeg")} alt="Tutor Hashique"></img>
        <h2>Abbaas</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/rifan.JPG")} alt="Tutor Bilal"></img>
        <h2>Rifan</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/jishna.jpg")} alt="Tutor"></img>
        <h2>Jishna</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/Ajmal.jpg")} alt="Tutor"></img>
        <h2>Ajmal</h2>
      </div>

      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/anaga.jpeg")} alt="Tutor"></img>
        <h2>Anagha</h2>
      </div>

      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/risvan.jpeg")} alt="Tutor"></img>
        <h2>Risvan</h2>
      </div>

      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/Sarath.jpeg")} alt="Tutor"></img>
        <h2>Sarath</h2>
      </div>

      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/arshaq.jpg")} alt="Tutor"></img>
        <h2>Arshaq</h2>
      </div>

      
      <div class="tutor-card">
        <img src={require("../../assets/img/reviewer-img/siraj.jpeg")} alt="Tutor"></img>
        <h2>Siraj</h2>
      </div>
    </div>
  </div>
</section>

<section className="mentor-section" >
  <div className="tutors-section" >

 
  <h1>Meet our Coordinaters</h1>
  <div  className="other-tutors" >
      <div class="tutor-card">
        <img  style={{width:"200px",height:'84%'}}  src={require("../../assets/img/reviewer-img/shereena.jpeg")} alt="Tutor Ajas"></img>
        <h2>Shereena</h2>
      </div>
      <div class="tutor-card">
        <img  style={{width:"200px",height:'84%'}}  src={require("../../assets/img/reviewer-img/anjoom.jpeg")} alt="Tutor Ajas"></img>
        <h2>Anjoom</h2>
      </div>
      <div class="tutor-card">
        <img  style={{width:"200px",height:'84%'}}  src={require("../../assets/img/reviewer-img/Ayisha afra.jpeg")} alt="Tutor Ajas"></img>
        <h2>Ayisha Afra</h2>
      </div>

      <div class="tutor-card">
        <img  style={{width:"200px",height:'84%'}}  src={require("../../assets/img/reviewer-img/mazin.jpeg")} alt="Tutor Ajas"></img>
        <h2>Mazin</h2>
      </div>

  </div>

  </div>
</section>


<section   className="footer-section" >

<Container>
<Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Together, We Build the Future </h2>
                <p className="lead">
                Your dreams are within reach, and we’re here to help you turn them into reality.
                 With our mentorship, you’ll not only gain technical skills but also the mindset and 
                 confidence to overcome challenges and seize opportunities. Let’s create a future where your
                 potential meets your ambition—one step at a time, side by side.
                </p>
          
              </Col>
            </Row>
</Container>


</section>


          {/* <Carousel /> */}


        </main>
        <CardsFooter />
      </>
    );
  }
}

export default AboutUs;
