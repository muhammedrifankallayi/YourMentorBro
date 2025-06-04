import React, { useState } from 'react';
import './PretestForm.css';
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import toast from "react-hot-toast";
import axios from 'axios';
import Spinner from 'components/Spinners/Spinner';
import { socailMediaLinks } from 'assets/data-sets/socialMedia';

function PretestForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    education: '',
    hasLaptop: '',
    hasWifi: '',
    isAvailable: '',
    communicationLevel: '',
    codingExperience: ''
  });
  const [showSpinner, setShowSpinner] = useState(false);

  const educationOptions = [
    { value: "postgrad", label: "Post Graduation" },
    { value: "undergrad", label: "Under Graduation" },
    { value: "plusTwo", label: "Plus Two" },
    { value: "highSchool", label: "High School" }
  ];

  const communicationOptions = [
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "average", label: "Average" },
    { value: "beginner", label: "Beginner" }
  ];

  const codingOptions = [
    { value: "experienced", label: "Experienced (2+ years)" },
    { value: "intermediate", label: "Intermediate (1-2 years)" },
    { value: "beginner", label: "Beginner (0-1 year)" },
    { value: "none", label: "No Experience" }
  ];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const validateForm = () => {
    const { name, email, whatsapp } = formData;
    if (!name) {
      toast.error("Name is required");
      return false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Valid email is required");
      return false;
    }
    if (!whatsapp || !/^\d{10}$/.test(whatsapp)) {
      toast.error("Valid 10-digit WhatsApp number is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowSpinner(true);


    try {
      const response = await fetch(socailMediaLinks.pretestFormLink, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        handleClose();
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          education: '',
          hasLaptop: '',
          hasWifi: '',
          isAvailable: '',
          communicationLevel: '',
          codingExperience: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleShow}
        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
        color="default"
      >
        <span className="btn-inner--icon mr-1">
          <i className="ni ni-paper-diploma" />
        </span>
        <span className="btn-inner--text">
          Take Pretest
        </span>
      </Button>

      <Modal show={show} onHide={handleClose} centered className="modern-modal">
        <Modal.Header>
          <Modal.Title>Pretest Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-control-flush"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-control-flush"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your WhatsApp number"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className="form-control-flush"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Select
                options={educationOptions}
                value={educationOptions.find(opt => opt.value === formData.education)}
                onChange={(opt) => handleInputChange('education', opt.value)}
                placeholder="Select your education level"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Laptop Availability</Form.Label>
              <div className="btn-group-toggle" data-toggle="buttons">
                <Button
                  className={`btn-round ${formData.hasLaptop === 'yes' ? 'active' : ''}`}
                  color="primary"
                  onClick={() => handleInputChange('hasLaptop', 'yes')}
                >
                  Yes
                </Button>
                <Button
                  className={`btn-round ${formData.hasLaptop === 'no' ? 'active' : ''}`}
                  color="primary"
                  onClick={() => handleInputChange('hasLaptop', 'no')}
                >
                  No
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>WiFi Availability</Form.Label>
              <div className="btn-group-toggle" data-toggle="buttons">
                <Button
                  className={`btn-round ${formData.hasWifi === 'yes' ? 'active' : ''}`}
                  color="primary"
                  onClick={() => handleInputChange('hasWifi', 'yes')}
                >
                  Yes
                </Button>
                <Button
                  className={`btn-round ${formData.hasWifi === 'no' ? 'active' : ''}`}
                  color="primary"
                  onClick={() => handleInputChange('hasWifi', 'no')}
                >
                  No
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>17-Day Availability</Form.Label>
              <div className="btn-group-toggle" data-toggle="buttons">
                <Button
                  className={`btn-round ${formData.isAvailable === 'yes' ? 'active' : ''}`}
                  color="primary"
                  onClick={() => handleInputChange('isAvailable', 'yes')}
                >
                  Yes
                </Button>
                <Button
                  className={`btn-round ${formData.isAvailable === 'no' ? 'active' : ''}`}
                  color="primary"
                  onClick={() => handleInputChange('isAvailable', 'no')}
                >
                  No
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Communication Level</Form.Label>
              <Select
                options={communicationOptions}
                value={communicationOptions.find(opt => opt.value === formData.communicationLevel)}
                onChange={(opt) => handleInputChange('communicationLevel', opt.value)}
                placeholder="Select your communication level"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Coding Experience</Form.Label>
              <Select
                options={codingOptions}
                value={codingOptions.find(opt => opt.value === formData.codingExperience)}
                onChange={(opt) => handleInputChange('codingExperience', opt.value)}
                placeholder="Select your coding experience"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} style={{ display: "flex" }}>
            {showSpinner ? (<Spinner />) : (<span>Submit</span>)}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PretestForm;
