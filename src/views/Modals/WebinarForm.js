import React,{useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import toast from "react-hot-toast";
import axios from 'axios';
import Spinner from 'components/Spinners/Spinner';
import { socailMediaLinks } from 'assets/data-sets/socialMedia';
const   WebinarForm = ()=> {

  const [webinarStatus,setWebinarStatus] = useState(false);
   
    const options = [
        { value: "1", label: "Post Graduation" },
        { value: "2", label: "Under Graduation" },
        { value: "3", label: "Pluse Two" },
        { value: "4", label: "High School Or Below" },
      ];

      const webinarsList = [
        {value:"C Programming Webinar",label:"C Programming Webinar"},
        {value:"Mern Stack Webinar",label:"Mern Stack Webinar"},
        {value:"Mean Stack Webinar",label:"Mean Stack Webinar"},
        {value:"Python Django Webinar",label:"Python Django Webinar"},
      ]


    const [show, setShow] = useState(false);
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [education,setEducation] = useState("");
    const [email,setEmail] = useState("");
    const [webinar,setWebinar] = useState("");
    const [showLoader,setShowLoader] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleSave = async() => {


if(webinarStatus==false){
 toast.error("Currently we are not hosting any Webinar ! ,Please contact us to know more.");
 return
}


      let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST', 'OPTIONS');


const Education  = options.find(x=>x.value==education).label
const formData = new FormData();
formData.append("Name", Name);
formData.append("Mobile", Mobile);
formData.append("Education", Education);
formData.append("Webinar",webinar)

   
      const query = `Name=${Name}&Mobile=${Mobile}&Education=${Education}&page=2&webinar=${webinar}&Email=${email}&Date=${new Date()}`
      if (!Name) {
        toast.error("Name is required");
        return;
      }
      if (!Mobile || !/^\d{10}$/.test(Mobile)) {
        toast.error("Valid 10 digit mobile number is required");
        return;
      }
      setShowLoader(true)
     // const url = "https://script.google.com/macros/s/AKfycbwH02_gLAZixrWZjeP44SElEik36ny9vqb77r8wxeyNCd0Tlho1oCiN4PA0rP7DWxG-EQ/exec"
      const url  = socailMediaLinks.webinarGoogleSheetLink;
      await axios.post(`${url}?${query}`,formData,
        { headers: headers}
      ).then((res)=>{
      
        toast.success("Your Response Recorded");
      })
      setShowLoader(false)
      setShow(false);

    }

  return (
    <>

      <Button   onClick={handleShow}
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-hat-3" />
                          </span>
                          <span className="btn-inner--text">
                           Book Free Webinar
                          </span>
                        </Button>

      {/* Modal */}


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
          <Modal.Title>Book your free webinar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

          <Form.Group className="mb-3" controlId="formBrandDescription">
                <Form.Label>Webinar</Form.Label>
                <Select options={webinarsList}   defaultValue={webinar} onChange={(e)=>setWebinar(e.value)}   placeholder="Choose webinar" />
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBrandName">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrandDescription">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                placeholder="Enter your 10 digit mobile number"
                value={Mobile}
                type='number'
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBrandDescription">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter your email"
                value={email}
                type='text'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

                <Form.Group className="mb-3" controlId="formBrandDescription">
                <Form.Label>Education Qualification</Form.Label>
                <Select options={options}   defaultValue={education} onChange={(e)=>setEducation(e.value)}   placeholder="Choose" />
                </Form.Group>

        

                
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>

            {
              showLoader?(
                <Spinner/>
              ):
              (
                <span>Save</span>
              )
            }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WebinarForm ;