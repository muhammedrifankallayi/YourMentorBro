import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";



import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Register from "views/examples/Register.js";
import AboutUs from "views/examples/AboutUs";
import { Toaster } from 'react-hot-toast';
import { ThreeDots } from "react-loader-spinner";

import { Button } from "reactstrap";
import Careers from "views/examples/Careers";
import ContactUs from "views/examples/ContactUs";
import CourseDetails from "views/examples/CourseDetails";
import Spinner from "components/Spinners/Spinner";
import Resourse from "views/examples/Resourse/Resourse";
import JobApply from "views/examples/JobApplyForm/JobApply";
import PretestPage from "views/examples/PretestPage";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Button  
                  className="btn-icon-only rounded-circle ml-1"
                  style={{background:"green",position:"fixed", right:"15px",bottom:"15px",zIndex:"999",color:"white",width:"60px",height:"60px",padding:"14px"}}
                  // href="https://github.com/creativetimofficial"
                  id="tooltip495507257"
                  target="_blank"
                  onClick={(e)=>{window.open("https://wa.me/message/34BQKKVFM37MJ1","_blank")}}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-whatsapp"  style={{fontSize:"30px"}} />
                  </span>
                </Button>
               
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/landing-page" exact element={<Index />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="/careers" exact element={<Careers />} />
      <Route path="/contact-us" exact element={<ContactUs />} />
      <Route path="/courses" exact element={<CourseDetails/>}  />
      <Route path="/resourses" exact element={<Resourse/>}  />
      <Route path="/pre-test" exact element={<PretestPage/>}  />
      <Route path="/job-apply" exact element={<JobApply/>}  />
      <Route path="/job-apply/:id" exact element={<JobApply/>}  />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
