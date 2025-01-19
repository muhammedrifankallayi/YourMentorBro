import React,{useState} from 'react';
import "./CourseDetails.scss";
import DemoNavbar from 'components/Navbars/DemoNavbar';
import { Tabs, Tab, Box, Typography } from "@mui/material";
import {CourseData} from "../../assets/data-sets/coursedata"


const CourseDetails = () => {
  const courses = CourseData

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (

   <>
   
   <DemoNavbar/>




   <div style={{ marginTop: "70px" }} className="container">
      <div className="course-details">
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
                <ul>
                  {course.modules.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                {/* <h4>Languages</h4>
                <ul>
                  {course.lang.map((item, idx) => (
                    <li key={idx}>
                      <img width="25px" height="25px" src={item.img} alt="Language Icon" /> {item.name}
                    </li>
                  ))}
                </ul> */}
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
                <div>
                  <h5> {} </h5>
                </div>
              </div>

            </TabPanel>
          ))}
        </div>
      </div>
    </div>
   
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



