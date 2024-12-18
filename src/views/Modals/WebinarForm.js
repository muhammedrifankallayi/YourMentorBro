import React,{useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";

const   WebinarForm = ()=> {


    const options = [
        { value: "1", label: "Post Graduation" },
        { value: "2", label: "Under Graduation" },
        { value: "3", label: "Pluse Two" },
        { value: "4", label: "High School Or Below" },
      ];


    const [show, setShow] = useState(false);
    const [clientName, setClientName] = useState("");
    const [clientMobile, setClientMobile] = useState("");
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleSave = () => {
     
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
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrandDescription">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                placeholder="Enter your 10 digit mobile number"
                value={clientMobile}
                type='number'
                onChange={(e) => setClientMobile(e.target.value)}
              />
            </Form.Group>

                <Form.Group className="mb-3" controlId="formBrandDescription">
                <Form.Label>Education (optional)</Form.Label>
                <Select options={options} placeholder="Choose" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBrandDescription">
              <Form.Label>Date (Conducting Every Satuaday ,Sunday in a Month )  </Form.Label>
              <Form.Control
                placeholder="Enter your 10 digit mobile number"
                value={clientMobile}
               type='date'
                onChange={(e) => setClientMobile(e.target.value)}
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