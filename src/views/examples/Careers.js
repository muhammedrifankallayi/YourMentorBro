import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import "./Careers.scss"
import CardsFooter from 'components/Footers/CardsFooter'
import {jobs} from "../../assets/data-sets/jobs_data";
import { FaBriefcase, FaClock, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import careerAnimi from "../../assets/Lottie-Files/career.json"
function Careers() {


  const navigate = useNavigate();


const handleApplyClick = (jobId) => {

  navigate(`/job-apply/${jobId}`);
};
  return (
    <div>
     <DemoNavbar/>


<div  className='container' style={{marginTop:"100px"}} >



<div className="p-2 bg-gray-100 min-h-screen flex flex-col items-center">
     <div  className='lottie-wrap' >   <div className='lottie-career'><Lottie  animationData={careerAnimi} /></div> <h2 className="text-2xl font-semibold text-gray-800 mb-3">Careers</h2></div>
      <div className=" w-full card-wraper">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white border  p-3 rounded-xl shadow-sm hover:shadow-md transition-all">
            <h4 className=" font-bolder text-gray-800 mb-2">{job.name}</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p className="flex items-center"><FaBriefcase className="mr-2 text-blue-600" /> {job.job_type}</p>
              <p className="flex items-center"><FaClock className="mr-2 text-green-600" /> {job.job_time}</p>
              <p className="flex items-center"><FaGraduationCap className="mr-2 text-purple-600" /> {job.qualification}</p>
              <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-red-600" /> Remote</p>
            </div>
            <p className="text-gray-700 text-sm mt-3">{job.desc}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all" onClick={()=>handleApplyClick(job.id)}  >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>

{/* <div  style={{width:"100%" ,padding:'10px' ,fontWeight:"bolder",textAlign:"center"}} >
    Sorry!, Currently there are no vaccancies .We will update ! if we are hiring..
</div> */}


</div>


 <CardsFooter />
    </div>
  )
}

export default Careers