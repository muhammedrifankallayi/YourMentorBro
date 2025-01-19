
import React from "react";

// reactstrap components
import { Container, Row,Card, CardBody,Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";




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


        <section   className="vision-section" style={{marginTop:"50px",background:"#ededed",paddingTop:"40px"}} >

<Container>
<Row className="justify-content-center">
              <Col className="text-center" lg="12">
                <h2 className="display-1">Our Vision</h2>
                <p className="lead"  style={{fontWeight:"500"}}>
                At Your Mentorbro, we know the pain of watching dreams slip away because of financial struggles. Many talented students, full of potential and determination, are forced to give up on their aspirations simply because they cannot afford the right coaching or guidance. We’ve been there, and we understand the frustration, the helplessness, and the fear of a future where opportunities seem out of reach.

This is why Your Mentorbro was born – to be a beacon of hope for students who dare to dream despite their hardships. We are committed to providing high-quality coaching and mentorship at a cost every family can afford. We want to ensure that no student is left behind, that no dream is crushed by financial burdens.

At Your Mentorbro, we don’t just teach – we uplift, inspire, and empower. We believe that every student, no matter their background, deserves the chance to rise above challenges and achieve greatness. Your dreams matter, and we are here to help you make them a reality.
                </p>
          
              </Col>
            </Row>
</Container>


</section>



     
<section   className="top-section" >

<div  className="content-box" >

<h1>Who We Are</h1> 

<p>
We’re not just mentors; we’re your partners in growth, progress, and achievement. At Your Mentor Bro, 
we specialize in helping individuals rediscover their passion for coding and career development.
 Our mission is simple: to equip you with the skills, confidence, and mindset needed to forge a successful path in today’s competitive world.

</p>

</div>

<div className="img-box" >
    <img style={{float:"right"}}  src={require("../../assets/img/about-us/pexels-fauxels-3183197.jpg")} ></img>
</div>

</section>


{/* section 2 */}


{/* <section   className="top-section" >
<div className="img-box" >
    <img style={{float:"left"}}   src={require("../../assets/img/about-us/pexels-fauxels-3228684.jpg")} ></img>
</div>

</section> */}


<section  className="card-section"  >

<div  className="content-box-2" >

<h1>What We Offer ? </h1>


</div>

<Row>
    <Col lg="4" sm="6">
    <Card className="shadow"    >
        
              <CardBody>
              <h5>   <i className=" ni ni-bell-55" /> Task-Based Reviews</h5>
             
                    <p className="description">
                    After every task, our mentors provide detailed feedback, helping you understand your 
                    strengths and identify areas for improvement. This ensures you’re constantly growing and honing your skills.

                    </p>
            
         
         
    
              </CardBody>
            </Card>

    </Col>

    <Col lg="4" sm="6" >
    <Card className="shadow"    >
              <CardBody>
              <h5>  <i className="ni ni-paper-diploma"></i> Expert Coding Guidance</h5>
                    <p className="description">
                    Master industry-relevant tech stacks like MERN, MEAN, Python, and more, with practical, hands-on learning led by experienced professionals.

                    </p>
            
              </CardBody>
            </Card>

    </Col>


    <Col lg="4" sm="6" >
    <Card className="shadow"    >
              <CardBody>
              <h5> <i className="ni ni-book-bookmark"></i> Communication and Language Support</h5>
                    <p className="description">
                    Gain fluency and confidence in English to excel in interviews, presentations, and team collaboration.

                    </p>
                   
         
         
    
              </CardBody>
            </Card>

    </Col>

    <Col lg="4" sm="6" >
    <Card className="shadow"    >
              <CardBody>
              <h5>  <i className="ni ni-collection" /> Resume Building</h5>
                    <p className="description">
                    Craft a standout resume that showcases your skills and experience in the best 
                    possible light, helping you stand out to recruiters.

                    </p>
                   
              </CardBody>
            </Card>

    </Col>

    <Col lg="4" sm="6" >
    <Card className="shadow"    >
              <CardBody>
              <h5>  <i className="ni ni-map-big"></i> Dream Job Preparation</h5>
                    <p className="description">
                    Receive personalized guidance to prepare for and crack your dream job. From interview coaching to job application strategies, we’re with you every step of the way.

                    </p>
                   
              </CardBody>
            </Card>

    </Col>
    <Col lg="4" sm="6" >
    <Card className="shadow"    >
              <CardBody>
              <h5>   <i className="ni ni-check-bold"></i> Continuous Support</h5>
                    <p className="description">
                    Stay connected with our mentors through open communication channels.  we’re here to help you stay motivated and on track.

                    </p>
                   
              </CardBody>
            </Card>

    </Col>
</Row>


</section>

<section   className="mentor-section" >
<div class="tutors-section">
    <h1>Meet Our Mentors</h1>
    <div class="tutors-container">
      <div class="tutor-card">
        <img src={require("../../assets/img/about-us/pexels-fauxels-3184431.jpg")} alt="Tutor Ajas"></img>
        <h2>Ajas</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/about-us/pexels-fauxels-3184431.jpg")} alt="Tutor Suhail"></img>
        <h2>Suhail</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/about-us/pexels-fauxels-3184431.jpg")} alt="Tutor Hashique"></img>
        <h2>Hashique</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/about-us/pexels-fauxels-3184431.jpg")} alt="Tutor Bilal"></img>
        <h2>Bilal</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/about-us/pexels-fauxels-3184431.jpg")} alt="Tutor"></img>
        <h2>Amal</h2>
      </div>
      <div class="tutor-card">
        <img src={require("../../assets/img/about-us/pexels-fauxels-3184431.jpg")} alt="Tutor"></img>
        <h2>Riya</h2>
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
