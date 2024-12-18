import React,{useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from 'prop-types'

function ContactForm(props) {

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
          <Modal.Title>Contact us to book Your Seat!</Modal.Title>
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

ContactForm.propTypes = {}

export default ContactForm
