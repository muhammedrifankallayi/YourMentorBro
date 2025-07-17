import React,{useState} from 'react';
import "./CourseDetails.scss";
import DemoNavbar from 'components/Navbars/DemoNavbar';
import { Tabs, Tab, Box, Typography } from "@mui/material";
import {CourseData} from "../../assets/data-sets/coursedata"
import CardsFooter from 'components/Footers/CardsFooter';
import Lottie from 'lottie-react';
import course from "../../assets/Lottie-Files/courses.json"
import { useNavigate } from 'react-router-dom';


const CourseDetails = () => {
  const courses = CourseData

  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (

   <>
   
   <DemoNavbar/>
   <div style={{ marginTop: "95px" }} className="container">
 
      <div className="course-details">
   <div  className='lottie-wrap' >     <div  className='lottie-course' ><Lottie   animationData={course} /></div> <h1   className='' >Courses   </h1> </div>
        <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
          {courses.map((course, index) => (
            <Tab key={index} label={course.name} />
          ))}
        </Tabs>

        <div className="courses-container" style={{width:"100%"}}  >
          {courses.map((course, index) => (
            <TabPanel key={index} value={activeTab} index={index}   >
              <div className="course-card">
                <h2>
                  <img width="50px" height="50px" src={course.logo} alt="Course Logo" /> {course.name}
                </h2>
                <h3> what is {course.name} ? </h3>
                <p>
                  {course.indro}
                </p>

                <h3> Let's Know About Each Term in {course.name} !</h3>
                {
                  course.Explanation.map((text,inx)=>(
                   <div>
                     <h5> {text.name} </h5>
                     <p>  {text.text} </p>
                     </div>
                  ))
                }
                <h4> <strong>Frontend Development</strong> </h4>
                <p>
                Frontend development refers to the part of a web application that users interact with directly. It includes everything you see on a website or web app, such as buttons, forms, animations, layouts, and text.
                </p>
                {/* <h6>  <strong>  Languages </strong> </h6>
                <u>
                  {
                    course.frontEndDevelopment.languages.map((lang,index)=>{
                      return (
                        <li key={index} >  {lang} </li>
                      )
                    })

                  }
                </u> */}

                {/* <h6>  <strong>  Frameworks </strong> </h6>
                <u>
                  {
                    course.frontEndDevelopment.frameworksLibraries.map((frm,index)=>{
                      return (
                        <li key={index} >  {frm} </li>
                      )
                    })

                  }
                </u> */}

                {/* <h6>  <strong>  UI Designing Libraries </strong> </h6>
                <u>
                  {
                    course.frontEndDevelopment.uiFrameworks.map((ui,index)=>{
                      return (
                        <li key={index} >  {ui} </li>
                      )
                    })

                  }
                </u> */}

                {/* <h6>  <strong>  Designing Tools </strong> </h6>
                <u>
                  {
                    course.frontEndDevelopment.designTools.map((ui,index)=>{
                      return (
                        <li key={index} >  {ui} </li>
                      )
                    })

                  }
                </u> */}


<ul>
  {
    course.frontend.map((item,inx)=>{
      return(
        <li  key={inx} >  {item} </li>
      )
    })
  }
</ul>
              

                <h4> <strong>backend Development</strong> </h4>
                {/* <h6>  <strong>  framework  </strong> </h6>
                 <span> - {course.backEndDevelopment.framework}</span>
                 <h6>  <strong>  Database  </strong> </h6>
                 <span> - {course.backEndDevelopment.database}</span>
                 {
                  course.backEndDevelopment.runTimeEnvironment&&
                  <div>
                     <h6   >  <strong>  Runtime Enviroment  </strong> </h6>
                     <span> - {course.backEndDevelopment.runTimeEnvironment}</span>
                  </div>
                 }

                 {
                  course.backEndDevelopment.authentication&&
<div>
                     <h6   >  <strong>  Authentication  </strong> </h6>
                     <span> - {course.backEndDevelopment.authentication}</span>
                  </div>

                 }

                 {
                  course.backEndDevelopment.deployment&&
                  <div>
                     <h6   >  <strong>  Deployment  </strong> </h6>
                     <span> - {course.backEndDevelopment.deployment}</span>
                  </div>
                 } */}

                 <ul>

                 {
                  course.backend.map((item,inx)=>{
                    return(
                      <li  key={inx} > {item} </li>
                    )
                  })
                 }

                 </ul>
                
                 <h4>  <strong>  DataStructures & Algorithms </strong> </h4>
                <ul>
                  {
                    course.dataStructuresAlgorithms.map((ui,index)=>{
                      return (
                        <li key={index} >  {ui} </li>
                      )
                    })

                  }
                </ul>

<h4> <strong>Mini Projects :</strong> </h4>
<p> {course.miniprojects} </p>

<h4><strong>Two Mega Projects :</strong>  </h4>
<p> {course.megaprojects} </p>

<h4> <strong>Self Development :</strong> </h4>
{
  course.other?.map((item,index)=>{
    return(
      <>
      <tr>
        <td style={{display:"flex",justifyContent:"space-between"}} > <strong>{item.title}</strong> <strong>:</strong> </td>
        <td>  {item.text} </td>
      </tr>
      </>
    )
  })
}

              </div>

            </TabPanel>
          ))}
        </div>
      </div>
    </div>

    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
      <button
        style={{ padding: '12px 32px', fontSize: '1.1rem', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}
        onClick={() => navigate('/application-form')}
      >
        Enroll Now
        <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#fff', verticalAlign: 'middle' }}>arrow_forward</span>
      </button>
    </div>

     <CardsFooter />
   
   </>
  );
};


const TabPanel = ({ children, value, index }) => {
  return value === index ? (
    <Box sx={{ p: 3 }}>
      <Typography>{children}</Typography>
    </Box>
  ) : null;
};

export default CourseDetails;



