import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import JobPostForm from "./JobPostForm";
import ResumeUpload from "./ResumeUpload";
import ResumeScore from "./ResumeScore";

const steps = ["Job Post Url", "Resume Upload", "Resume Score"];

export default function Progress() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [resumeScoreData, setResumeScoreData] = React.useState(null);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <JobPostForm changeStep={setActiveStep} currentStep={activeStep} />
        );
      case 1:
        return (
          <ResumeUpload
            changeStep={setActiveStep}
            currentStep={activeStep}
            setResumeScore={setResumeScoreData}
          />
        );
      case 2:
        return (
          <ResumeScore
            resumeScore={resumeScoreData}
            changeStep={setActiveStep}
            currentStep={activeStep}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // height: "100vh",
        }}
      >
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            style={{ backgroundColor: "#e5ffea", borderRadius: "10px" }}
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="#1565c0"
            >
              <strong>Resume Score Calculator</strong>
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 4, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          </Paper>
          {/* <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography> */}
        </Container>
      </div>
    </React.Fragment>
  );
}
