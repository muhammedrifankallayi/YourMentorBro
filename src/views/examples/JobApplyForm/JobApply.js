import DemoNavbar from 'components/Navbars/DemoNavbar'
import React, { useState ,useEffect} from 'react'
import {jobs} from "../../../assets/data-sets/jobs_data"
import "./JobApply.scss"
import { CardFooter } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { socailMediaLinks } from 'assets/data-sets/socialMedia';
import toast from 'react-hot-toast'
import { Button } from "react-bootstrap";
import Spinner from '../../../components/Spinners/Spinner';
import CardsFooter from 'components/Footers/CardsFooter'

function JobApply() {

const navigate = useNavigate()

const [name,setName] = useState();
const [mobile,setMobile] = useState();
const [email,setEmail] = useState();
const [coverletter,setCoverLetter] = useState();
const [cv,setCv] = useState(null);
    const [showSpinner,setShowSpinner] = useState(false);

const {id} = useParams() 
const job = jobs.find(x=>x.id==id)



useEffect(()=>{
  window.scrollTo({ top: 0, behavior: 'instant' });
},[])







const apply = async(e)=>{
    e.preventDefault()


    //header setting
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // header setting end

    if(cv==null){
      toast.error("Cv is required..!")
      return
    }

    var base64String =""
    const reader = new FileReader();
    reader.readAsDataURL(cv);
    reader.onload = async () => {
     base64String  = reader.result.split(",")[1];
    }

    const url  = socailMediaLinks.jobApplyLink
    const currDate = new Date()
    const formData  = new FormData();

    formData.append('file',base64String)
    formData.append('fileName',cv.name)
    formData.append('mimeType',cv.type)


    if (!name) {
        toast.error("Name is required");
        return;
      }
      if (!mobile || !/^\d{10}$/.test(mobile)) {
        toast.error("Valid 10 digit mobile number is required");
        return;
      }
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        toast.error("Valid email is required");
        
        return;
      }
      if(!cv){
        toast.error("Cv Required");
        return
      }

      setShowSpinner(true)

      

await axios.post(`${url}?Name=${name}&Mobile=${mobile}&Email=${email}&Date=${currDate}&CoverLetter=${coverletter}&file=${base64String}&fileName=${cv.name}&mimeType=${cv.type}`,formData,
  { headers: headers}
).then((res)=>{
    toast.success("Your Application submitted");
  window.location.href="/careers"
    setName("");
    setEmail("");
    setMobile("");
    setCv(null);
    setCoverLetter("");
    setShowSpinner(false)

},(err)=>{
    toast.error("Something went wrong , Please try again or contact us in whatsapp");
    setShowSpinner(false)

}).catch((err)=>{
    toast.error("Something went wrong , Please try again or contact us in whatsapp");
    setShowSpinner(false)

})
}



const handleFileChange = (event) => {
    setCv(event.target.files[0]);
  };

  return (
    <>

    <DemoNavbar  />

    <div style={{marginTop:"120px"}} className='main-card' >
    <div class="container">
        <h1> {job?.name} </h1>
        <p class="job-info"><span class="bold">&#128187; Job Category:</span>  {job?.category} </p>
        <p class="job-info"><span class="bold">&#128188; Job Type:</span>  {job?.job_type} </p>
        <p class="job-info"><span class="bold">&#127758; Job Location:</span> {job?.location} </p>
        <p class="job-info"><span class="bold">&#9200; Working Time:</span>  {job?.job_time} </p>
        
        <p class="bold">{job?.experience} </p>
        <p class="bold">Education : {job?.education} </p>
        <p class="bold">EXP:  {job?.yearOfExperience} </p>
        
        <h2>Responsibilities</h2>
        <ul>
            {
                job?.responsibilities.map((item,index)=>{
                    return(
                        <li key={index} >  {item} </li>
                    )
                })
            }
           
        </ul>
        
        <h2>Requirements</h2>
        <ul>
            {
                job?.requirements.map((item,index)=>{
                    return(
                        <li key={index} > {item} </li>
                    )
                })
            }
        </ul>
    </div>

<div className='container' >
<h4>Apply For the Role :</h4>
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Full Name</label>
    <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} id="formGroupExampleInput" placeholder="full name"></input>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email </label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="email"  onChange={(e)=>setEmail(e.target.value)} ></input>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Phone </label>
    <input type="tel" class="form-control" id="formGroupExampleInput2"    onChange={(e)=>setMobile(e.target.value)} placeholder="mobile number"></input>
  </div>

  <div class="form-group">
    <label for="formGroupExampleInput2">Cover Letter </label>
   <textarea className='form-control' onChange={(e)=>setCoverLetter(e.target.value)} rows={3} ></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlFile1">CV</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleFileChange} ></input>
  </div>

  <div class="form-group btn-sec">
  <Button variant="primary"  style={{display:"flex"}} onClick={apply}>
           {showSpinner?(<Spinner/>):(<span>Apply</span>)}
          </Button>
  </div>
</form>
</div>

  

    </div>
    
 <CardsFooter/>
    </>
  )
}

export default JobApply