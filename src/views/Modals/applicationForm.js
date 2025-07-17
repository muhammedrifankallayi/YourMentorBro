import React, { useReducer, useState } from 'react';
import { ChevronLeft, ChevronRight, User, GraduationCap, MessageSquare, CheckCircle, X } from 'lucide-react';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import './applicationForm.css';

const initialFormData = {
  // Step 1
  name: '',
  dob: '',
  mobile: '',
  email: '',
  // Step 2
  qualification: '',
  // Step 3
  hasWifi: '',
  hasPC: '',
  selfConfident: '',
  futureGoals: ''
};

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET':
      return initialFormData;
    default:
      return state;
  }
}

const MultiStepForm = ({ isOpen, toggle }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, dispatch] = useReducer(formReducer, initialFormData);

  const qualificationOptions = [
    '+2 science',
    '+2 computer science',
    '+2 commerce',
    '+2 Humanities',
    'Bsc degree',
    'Btech',
    'BCA',
    'MCA',
    'other degree',
    'Degree Incomplete',
    'Degree Failed'
  ];

  const handleInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    dispatch({ type: 'RESET' });
    toggle(); // Close the modal after submission
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.dob && formData.mobile && formData.email;
      case 2:
        return formData.qualification;
      case 3:
        return formData.hasWifi && formData.hasPC && formData.selfConfident && formData.futureGoals;
      default:
        return false;
    }
  };

  const StepIndicator = ({ step, isActive, isCompleted }) => (
    <div className={`step-indicator${isCompleted ? ' completed' : ''}${isActive ? ' active' : ''}`}>
      {isCompleted ? <CheckCircle size={20} /> : step}
    </div>
  );

  const Step1Content = () => (
    <div className="step-content">
      <div className="step-header">
        <User className="step-icon" size={24} />
        <h2 className="step-title">Personal Information</h2>
      </div>
      <div className="form-group">
        <label className="form-label">Full Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="form-input"
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Date of Birth *</label>
        <input
          type="date"
          value={formData.dob}
          onChange={(e) => handleInputChange('dob', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Mobile Number *</label>
        <input
          type="tel"
          value={formData.mobile}
          onChange={(e) => handleInputChange('mobile', e.target.value)}
          className="form-input"
          placeholder="Enter your mobile number"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email Address *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="form-input"
          placeholder="Enter your email address"
        />
      </div>
    </div>
  );

  const Step2Content = () => (
    <div className="step-content">
      <div className="step-header">
        <GraduationCap className="step-icon" size={24} />
        <h2 className="step-title">Educational Qualification</h2>
      </div>
      <div className="form-group">
        <label className="form-label">Your Highest Qualification *</label>
        <div className="radio-group">
          {qualificationOptions.map((option) => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="qualification"
                value={option}
                checked={formData.qualification === option}
                onChange={(e) => handleInputChange('qualification', e.target.value)}
                className="radio-input"
              />
              <span className="radio-text">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const Step3Content = () => (
    <div className="step-content">
      <div className="step-header">
        <MessageSquare className="step-icon" size={24} />
        <h2 className="step-title">Additional Information</h2>
      </div>
      <div className="form-group">
        <label className="form-label">Is wifi facility available in your home? *</label>
        <div className="radio-group">
          {['Yes', 'No'].map((option) => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="hasWifi"
                value={option}
                checked={formData.hasWifi === option}
                onChange={(e) => handleInputChange('hasWifi', e.target.value)}
                className="radio-input"
              />
              <span className="radio-text">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Do you have pc (laptop / computer) *</label>
        <div className="radio-group">
          {['Yes', 'No'].map((option) => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="hasPC"
                value={option}
                checked={formData.hasPC === option}
                onChange={(e) => handleInputChange('hasPC', e.target.value)}
                className="radio-input"
              />
              <span className="radio-text">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Are you a self confident person? *</label>
        <div className="radio-group">
          {['Yes', 'No'].map((option) => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="selfConfident"
                value={option}
                checked={formData.selfConfident === option}
                onChange={(e) => handleInputChange('selfConfident', e.target.value)}
                className="radio-input"
              />
              <span className="radio-text">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Tell something about you, your future goals, dreams and what you expect from us (you can open up your mind) *</label>
        <textarea
          value={formData.futureGoals}
          onChange={(e) => handleInputChange('futureGoals', e.target.value)}
          rows="4"
          className="form-input textarea"
          placeholder="Your answer..."
        />
      </div>
    </div>
  );

  return (
    <Modal
      className="application-modal"
      isOpen={isOpen}
      toggle={toggle}
    >
      <div className="modal-header">
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={toggle}
        >
          <span aria-hidden={true}><X size={24} /></span>
        </button>
      </div>
      <ModalBody>
        <div className="application-form-bg">
          <div className="application-form-container">
            {/* Progress Bar */}
            <div className="progress-bar-section">
              <div className="progress-bar-steps">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <StepIndicator 
                      step={step}
                      isActive={currentStep === step}
                      isCompleted={currentStep > step}
                    />
                    {step < 3 && (
                      <div className={`progress-bar-line${currentStep > step ? ' completed' : ''}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="progress-bar-label">
                Step {currentStep} of 3
              </div>
            </div>
            {/* Form Card */}
            <div className="form-card">
              <div className="form-card-content">
                {currentStep === 1 && <Step1Content />}
                {currentStep === 2 && <Step2Content />}
                {currentStep === 3 && <Step3Content />}
              </div>
              {/* Navigation Buttons */}
              <div className="form-navigation">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="nav-btn prev-btn"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>
                <div className="step-counter">
                  {currentStep}/3
                </div>
                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="nav-btn next-btn"
                  >
                    Next
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isStepValid()}
                    className="nav-btn submit-btn"
                  >
                    Submit
                    <CheckCircle size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default MultiStepForm;