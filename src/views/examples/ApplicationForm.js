import React, { useState } from 'react';
import { Container, Button, TextField, Stepper, Step, StepLabel, Box, Typography, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Avatar, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";

const qualificationOptions = [
  { label: 'Plus Two science', img: '/qualification-images/science.png' },
  { label: 'Plus Two computer science', img: '/qualification-images/computer_science.png' },
  { label: 'Plus Two commerce', img: '/qualification-images/commerce.png' },
  { label: 'Plus Two Humanities', img: '/qualification-images/humanities.png' },
  { label: 'Bsc degree', img: '/qualification-images/bsc.png' },
  { label: 'Btech', img: '/qualification-images/btech.png' },
  { label: 'BCA', img: '/qualification-images/bca.png' },
  { label: 'MCA', img: '/qualification-images/mca.png' },
  { label: 'other degree', img: '/qualification-images/other.png' },
  { label: 'Degree Incomplete', img: '/qualification-images/incomplete.png' },
  { label: 'Degree Failed', img: '/qualification-images/failed.png' },
];

const steps = [
  'Basic Info',
  'Date of Birth',
  'Qualification',
  'Home & Confidence',
  'Future Goals',
  'Coding Experience',
  'Work Experience & Submit'
];

const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    dob: '',
    qualification: '',
    address: '',
    wifi: '', // Added wifi field
    pc: '', // Added pc field
    selfConfident: '', // Added selfConfident field
    futureGoals: '', // Added futureGoals field
    codingExperience: '', // Added codingExperience field
    workedBefore: '', // Added workedBefore field
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      setLoading(true);
      // Build query string from formData
      const apiUrl = 'https://script.google.com/macros/s/AKfycbz2D4KkBUxxWKc8dWQHlAipoU3FhaIpOqA-VH6H7pzUFYGlhuMZk-dx7iuW4jOAs9Bfqw/exec';
      const params = new URLSearchParams({
        Name: formData.name,
        Mobile: formData.mobile,
        Email: formData.email,
        DOB: formData.dob,
        Qualification: formData.qualification.trim().toString(),
        Wifi: formData.wifi,
        PC: formData.pc,
        SelfConfident: formData.selfConfident,
        FutureGoals: formData.futureGoals,
        CodingExperience: formData.codingExperience,
        WorkedBefore: formData.workedBefore
      }).toString();
      const apiUrlWithParams = `${apiUrl}?${params}`;
      // Use FormData and do NOT set headers
      const formDatas = new FormData();
      formDatas.append('Name', formData.name);
      formDatas.append('Mobile', formData.mobile);
      formDatas.append('Email', formData.email);
      formDatas.append('DOB', formData.dob);
      formDatas.append('Qualification', formData.qualification);
      formDatas.append('Wifi', formData.wifi);
      formDatas.append('PC', formData.pc);
      formDatas.append('SelfConfident', formData.selfConfident);
      formDatas.append('FutureGoals', formData.futureGoals);
      formDatas.append('CodingExperience', formData.codingExperience);
      formDatas.append('WorkedBefore', formData.workedBefore);
      try {
        await axios.post(apiUrlWithParams, formDatas);
        toast.success('Application submitted successfully!');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          dob: '',
          qualification: '',
          wifi: '',
          pc: '',
          selfConfident: '',
          futureGoals: '',
          codingExperience: '',
          workedBefore: '',
        });
        setSubmitted(true);
        setLoading(false);
      } catch (error) {
        toast.error('Submission failed. Please try again.');
        setLoading(false);
      }
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <TextField
              label="Name"
              value={formData.name}
              onChange={handleChange('name')}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Mobile"
              value={formData.mobile}
              onChange={handleChange('mobile')}
              fullWidth
              required
              margin="normal"
              type="tel"
            />
            <TextField
              label="Email"
              value={formData.email}
              onChange={handleChange('email')}
              fullWidth
              required
              margin="normal"
              type="email"
            />
          </Box>
        );
      case 1:
        return (
          <TextField
            label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={handleChange('dob')}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        );
      case 2:
        return (
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Your Highest Qualification</FormLabel>
            <RadioGroup
              name="qualification"
              value={formData.qualification}
              onChange={handleChange('qualification')}
            >
              <Grid container spacing={2}>
                {qualificationOptions.map((option) => (
                  <Grid item xs={12} sm={6} key={option.label}>
                    <FormControlLabel
                      value={option.label}
                      control={<Radio />}
                      label={option.label}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </FormControl>
        );
      case 3:
        return (
          <Box>
            <FormControl component="fieldset" fullWidth margin="normal" required>
              <FormLabel component="legend">Is wifi facility available in your home? <span style={{color: 'red'}}>*</span></FormLabel>
              <RadioGroup
                name="wifi"
                value={formData.wifi || ''}
                onChange={handleChange('wifi')}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" fullWidth margin="normal" required>
              <FormLabel component="legend">Do you have pc (laptop / computer) <span style={{color: 'red'}}>*</span></FormLabel>
              <RadioGroup
                name="pc"
                value={formData.pc || ''}
                onChange={handleChange('pc')}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" fullWidth margin="normal" required>
              <FormLabel component="legend">Are you a self confident person? <span style={{color: 'red'}}>*</span></FormLabel>
              <RadioGroup
                name="selfConfident"
                value={formData.selfConfident || ''}
                onChange={handleChange('selfConfident')}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>
        );
      case 4:
        return (
          <>
          <lable>Tell something about you, your future goals, dreams and what you expect from us (you can open up your mind)</lable>
           <TextField
            label="Tell something about you"
            value={formData.futureGoals}
            onChange={handleChange('futureGoals')}
            fullWidth
            required
            margin="normal"
            multiline
            minRows={5}
          />
          </>
         
        );
      case 5:
        return (
          <>
          <label>Do you have any coding experience? share(tell) what you know</label>
           <TextField
            label="Write about it"
            value={formData.codingExperience}
            onChange={handleChange('codingExperience')}
            fullWidth
            required
            margin="normal"
            multiline
            minRows={5}
          />
          </>
         
        );
      case 6:
        return (
          <Box>
            <FormControl component="fieldset" fullWidth margin="normal" required>
              <FormLabel component="legend">Have you worked before? <span style={{color: 'red'}}>*</span></FormLabel>
              <RadioGroup
                name="workedBefore"
                value={formData.workedBefore || ''}
                onChange={handleChange('workedBefore')}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>
        );
      case 7:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>Review your details:</Typography>
            <Typography><b>Name:</b> {formData.name}</Typography>
            <Typography><b>Mobile:</b> {formData.mobile}</Typography>
            <Typography><b>Email:</b> {formData.email}</Typography>
            <Typography><b>Date of Birth:</b> {formData.dob}</Typography>
            <Typography><b>Qualification:</b> {formData.qualification}</Typography>
            <Typography><b>Wifi at home:</b> {formData.wifi}</Typography>
            <Typography><b>PC at home:</b> {formData.pc}</Typography>
            <Typography><b>Self Confident:</b> {formData.selfConfident}</Typography>
            <Typography><b>Future Goals:</b> {formData.futureGoals}</Typography>
            <Typography><b>Coding Experience:</b> {formData.codingExperience}</Typography>
            <Typography><b>Worked Before:</b> {formData.workedBefore}</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, mt: 4, minHeight: '70vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Button variant="text" color="secondary" sx={{ minWidth: 0, width: 40, height: 40, p: 0, mr: 1 }} onClick={() => navigate('/')} aria-label="Back to Home">
            <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', fontSize: 24, color: '#1976d2' }}>arrow_back</span>
          </Button>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.2rem' }} gutterBottom>
            Application Form
          </Typography>
        </Box>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((_, idx) => (
            <Step key={idx}>
              <StepLabel />
            </Step>
          ))}
        </Stepper>
        {submitted ? (
          <Box textAlign="center" py={6}>
            <Typography variant="h5" color="success.main" gutterBottom>
              Thank you for submitting your application!
            </Typography>
            <Typography variant="body1">We have received your details.</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 3 }} onClick={() => navigate('/')} aria-label="Back to Home">
              <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', fontSize: 24, marginRight: 6, color: '#1976d2' }}>arrow_back</span>
              Back to Home
            </Button>
          </Box>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            {getStepContent(activeStep)}
            <Box mt={4} display="flex" justifyContent="space-between">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color={activeStep === steps.length - 1 ? 'success' : 'primary'}
                disabled={
                  loading ||
                  (activeStep === 0 && (!formData.name || !formData.mobile || !formData.email)) ||
                  (activeStep === 1 && !formData.dob) ||
                  (activeStep === 2 && !formData.qualification) ||
                  (activeStep === 3 && (!formData.wifi || !formData.pc || !formData.selfConfident)) ||
                  (activeStep === 4 && !formData.futureGoals) ||
                  (activeStep === 5 && !formData.codingExperience) ||
                  (activeStep === 6 && !formData.workedBefore) ||
                  (activeStep === 7 && (
                    !formData.name || !formData.mobile || !formData.email ||
                    !formData.dob || !formData.qualification || !formData.wifi || !formData.pc || !formData.selfConfident ||
                    !formData.futureGoals || !formData.codingExperience || !formData.workedBefore
                  ))
                }
              >
                {loading && activeStep === steps.length - 1 ? 'Submitting...' : (activeStep === steps.length - 1 ? 'Submit' : 'Next')}
              </Button>
            </Box>
          </form>
        )}
      </Paper>
    </Container>
  );
};

export default ApplicationForm; 