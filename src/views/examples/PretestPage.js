import React from "react";
import Select from "react-select";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import "./PretestPage.css";
import PreTestStunning from "./PreTestStunning";
import axios from "axios";

class PretestPage extends React.Component {
  state = {
    modal: false,
    formData: {
      name: '',
      email: '',
      whatsapp: '',
      education: '',
      hasLaptop: '',
      hasWifi: '',
      isAvailable: '',
      communicationLevel: '',
      codingExperience: ''
    }
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };  educationOptions = [
   { value: "plus Two Commerce", label: "Plus Two (Commerce)" },
    { value: "plus Two Science", label: "Plus Two (Science)" },
   { value: "plusTwo Two Humanties", label: "Plus Two (Humanties)" },
   { value: "under Graduation", label: "Under Graduation" },
  ];

  communicationOptions = [
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "average", label: "Average" },
    { value: "beginner", label: "Beginner" }
  ];

  codingOptions = [
    { value: "experienced", label: "Experienced (2+ years)" },
    { value: "intermediate", label: "Intermediate (1-2 years)" },
    { value: "beginner", label: "Beginner (0-1 year)" },
    { value: "none", label: "No Experience" }
  ];

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const { formData } = this.state;
    
    // Validate required fields
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!formData.whatsapp.trim() || !/^\d{10}$/.test(formData.whatsapp)) {
      alert('Please enter a valid 10-digit WhatsApp number');
      return;
    }
    if (!formData.education) {
      alert('Please select your education level');
      return;
    }
    if (!formData.hasLaptop) {
      alert('Please indicate if you have a laptop');
      return;
    }
    if (!formData.hasWifi) {
      alert('Please indicate if you have WiFi connectivity');
      return;
    }
    if (!formData.isAvailable) {
      alert('Please indicate your 17-day availability');
      return;
    }
    if (!formData.communicationLevel) {
      alert('Please select your communication level');
      return;
    }
    if (!formData.codingExperience) {
      alert('Please select your coding experience');
      return;
    }

        let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    
    headers.append('GET', 'POST', 'OPTIONS');

    try {
      // Submit form data to your API endpoint
      const apiUrl = 'https://script.google.com/macros/s/AKfycbwC4bty5u6rLZPXCQN2okIBsE284jER3PErCr7AL7GtQF-kZcL3ZRokbz5z9E9PVco5/exec';
const formDatas = new FormData();
// Build query string from formData
const params = new URLSearchParams({
    Name: formData.name,
    Email: formData.email,
    WhatsApp: formData.whatsapp,
    Education: formData.education,
    HasLaptop: formData.hasLaptop,
    HasWifi: formData.hasWifi,
    IsAvailable: formData.isAvailable,
    CommunicationLevel: formData.communicationLevel,
    CodingExperience: formData.codingExperience
}).toString();

const apiUrlWithParams = `${apiUrl}?${params}`;

    const response =     await axios.post(apiUrlWithParams, formDatas, {
        headers: headers
        });


      if (response.ok) {
        alert('Registration successful! We will contact you shortly.');
        this.setState({
          formData: {
            name: '',
            email: '',
            whatsapp: '',
            education: '',
            hasLaptop: '',
            hasWifi: '',
            isAvailable: '',
            communicationLevel: '',
            codingExperience: ''
          }
        });
        this.toggle();
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
     


<PreTestStunning onClickBtn={this.toggle}  />
       
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">What You'll Get</h2>
                  <p className="lead text-white">
                    By the end of this pre-test journey, you will have a clear understanding of whether this field is the right fit for you. We provide all necessary materials including detailed voice notes and explanations to ensure your success.
                  </p>                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="modern-modal"
                    centered
                  >                    <ModalHeader toggle={this.toggle}>Register for Pre-test</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={this.handleSubmit}>
                        <div className="modal-form-content">
                        <FormGroup>
                          <Label>Name</Label>
                          <Input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={this.state.formData.name}
                            onChange={this.handleInputChange}
                            className="form-control-flush"
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={this.state.formData.email}
                            onChange={this.handleInputChange}
                            className="form-control-flush"
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>WhatsApp Number</Label>
                          <Input
                            type="tel"
                            name="whatsapp"
                            placeholder="Enter your WhatsApp number"
                            value={this.state.formData.whatsapp}
                            onChange={this.handleInputChange}
                            className="form-control-flush"
                          />
                        </FormGroup>

                        <FormGroup>                          <Label>Education Level</Label>
                          <Select
                            options={this.educationOptions}
                            value={this.educationOptions.find(opt => opt.value === this.state.formData.education)}
                            onChange={(opt) => this.handleInputChange({ target: { name: 'education', value: opt ? opt.value : '' }})}
                            placeholder="Select your education level"
                            className="react-select-container"
                            classNamePrefix="react-select"
                            isClearable
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>Do you have a laptop?</Label>
                          <div className="btn-group-toggle">
                            <Button
                              color="primary"
                              onClick={() => this.handleInputChange({ target: { name: 'hasLaptop', value: 'yes' }})}
                              active={this.state.formData.hasLaptop === 'yes'}
                              outline
                            >
                              Yes
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => this.handleInputChange({ target: { name: 'hasLaptop', value: 'no' }})}
                              active={this.state.formData.hasLaptop === 'no'}
                              outline
                            >
                              No
                            </Button>
                          </div>
                        </FormGroup>

                        <FormGroup>
                          <Label>Do you have WiFi connectivity?</Label>
                          <div className="btn-group-toggle">
                            <Button
                              color="primary"
                              onClick={() => this.handleInputChange({ target: { name: 'hasWifi', value: 'yes' }})}
                              active={this.state.formData.hasWifi === 'yes'}
                              outline
                            >
                              Yes
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => this.handleInputChange({ target: { name: 'hasWifi', value: 'no' }})}
                              active={this.state.formData.hasWifi === 'no'}
                              outline
                            >
                              No
                            </Button>
                          </div>
                        </FormGroup>

                        <FormGroup>
                          <Label>Are you available for 17 days?</Label>
                          <div className="btn-group-toggle">
                            <Button
                              color="primary"
                              onClick={() => this.handleInputChange({ target: { name: 'isAvailable', value: 'yes' }})}
                              active={this.state.formData.isAvailable === 'yes'}
                              outline
                            >
                              Yes
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => this.handleInputChange({ target: { name: 'isAvailable', value: 'no' }})}
                              active={this.state.formData.isAvailable === 'no'}
                              outline
                            >
                              No
                            </Button>
                          </div>
                        </FormGroup>

                        <FormGroup>                          <Label>Communication Level</Label>
                          <Select
                            options={this.communicationOptions}
                            value={this.communicationOptions.find(opt => opt.value === this.state.formData.communicationLevel)}
                            onChange={(opt) => this.handleInputChange({ target: { name: 'communicationLevel', value: opt ? opt.value : '' }})}
                            placeholder="Select your communication level"
                            className="react-select-container"
                            classNamePrefix="react-select"
                            isClearable
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>Coding Experience</Label>
                          <Input
                            type="select"
                            name="codingExperience"
                            value={this.state.formData.codingExperience}
                            onChange={this.handleInputChange}
                            className="form-control-flush"
                          >
                            <option value="">Select your coding experience</option>
                            <option value="experienced">Experienced (2+ years)</option>
                            <option value="intermediate">Intermediate (1-2 years)</option>
                            <option value="beginner">Beginner (0-1 year)</option>
                            <option value="none">No Experience</option>
                          </Input>
                        </FormGroup>                        </div>
                        <div className="modal-form-submit">
                          <Button color="primary" block type="submit">
                            Submit Application
                          </Button>
                        </div>
                      </Form>
                    </ModalBody>
                  </Modal>
                  <Button
                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                    color="default"
                    onClick={this.toggle}
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="ni ni-cloud-download-95" />
                    </span>
                    <span className="btn-inner--text">Start Your Journey</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default PretestPage;
