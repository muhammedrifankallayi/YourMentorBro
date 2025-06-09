import { socailMediaLinks } from 'assets/data-sets/socialMedia';
import axios from 'axios';
import Spinner from 'components/Spinners/Spinner';
import React,{useState,useEffect} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";

function ContactForm() {


  useEffect(()=>{

  },[])

    const [show, setShow] = useState(false);
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Email,setEmail] = useState("");
    const [showSpinner,setShowSpinner] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleSave = async(e) => {
     
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
setShowSpinner(true)
// const url = "https://script.google.com/macros/s/AKfycbwH02_gLAZixrWZjeP44SElEik36ny9vqb77r8wxeyNCd0Tlho1oCiN4PA0rP7DWxG-EQ/exec"

const url  = socailMediaLinks.contactusGoogleSheetLink
const curr_date = new Date()
await axios.post(`${url}?Date=${curr_date}&Name=${Name}&Mobile=${Mobile}&Email=${Email}&page=1`,formData,
  { headers: headers}
).then((response)=>{
  setShowSpinner(false)
toast.success("Your response send !")
  setName("");
  setMobile("");
  setEmail("");
  setShow(false);
})

      // 

    }

  return (
    <>
                        <Button  onClick={handleShow}
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-send" />
                          </span>
                          <span className="btn-inner--text">Contact Us</span>
                        </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
          <Modal.Title>Get In Touch With Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                type='text'
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBrandDescription">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter your Email"
                value={Email}
                type='text'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"  style={{display:"flex"}} onClick={handleSave}>
           {showSpinner?(<Spinner/>):(<span>Save</span>)}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

ContactForm.propTypes = {}

export default ContactForm
