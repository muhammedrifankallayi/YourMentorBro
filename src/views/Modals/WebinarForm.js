import React,{useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import toast from "react-hot-toast";
import axios from 'axios';
const   WebinarForm = ()=> {


    const options = [
        { value: "1", label: "Post Graduation" },
        { value: "2", label: "Under Graduation" },
        { value: "3", label: "Pluse Two" },
        { value: "4", label: "High School Or Below" },
      ];


    const [show, setShow] = useState(false);
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [education,setEducation] = useState("");
    const [date,setDate] = useState("");
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleSave = async() => {

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
formData.append("Date", date);
   
      const query = `Name=${Name}&Mobile=${Mobile}&Education=${Education}&Date=${date}&page=2`
      if (!Name) {
        toast.error("Name is required");
        return;
      }
      if (!Mobile || !/^\d{10}$/.test(Mobile)) {
        toast.error("Valid 10 digit mobile number is required");
        return;
      }
      const url = "https://script.google.com/macros/s/AKfycbwH02_gLAZixrWZjeP44SElEik36ny9vqb77r8wxeyNCd0Tlho1oCiN4PA0rP7DWxG-EQ/exec"

      await axios.post(`${url}?${query}`,formData,
        { headers: headers}
      ).then((res)=>{
        toast.success("Your Response Recorded");
      })
     
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
                <Form.Label>Education (optional)</Form.Label>
                <Select options={options}   defaultValue={education} onChange={(e)=>setEducation(e.value)}   placeholder="Choose" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBrandDescription">
              <Form.Label>Date (Conducting Every Satuaday ,Sunday in a Month )  </Form.Label>
              <Form.Control
                placeholder="Enter your 10 digit mobile number"
                value={date}
               type='date'
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

                
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WebinarForm ;