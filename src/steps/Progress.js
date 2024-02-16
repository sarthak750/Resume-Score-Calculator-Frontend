import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AccordionUsage from "../components/Collapsible";

import Container from "@mui/material/Container";
import { AppBar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
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
  const [index, setIndex] = React.useState(1);

  function handleClick() {
    setIndex(!index);
  }

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
      <AppBar
        position="absolute"
        elevation={0}
        style={{
          backgroundColor: "#F6F8FD",
          boxShadow: "2px 2px 1px #D6D6D6",
        }}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h4" color="#05153C" noWrap>
            <strong>Resume Score Calculator</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",

          // maxWidth="sm"
        }}
      >
        {/* <Container
          component="main"
          sx={{ mb: 4 }}
          style={{
            width: "60%",
            paddingLeft: "10%",
            backgroundColor: "blue",
          }}
        > */}
        <Paper
          style={{
            backgroundColor: "#DBE6FD",
            borderRadius: "20px",
            boxShadow: "10px 10px 5px #D6D6D6",
            marginLeft: "10%",
            marginRight: "5%",
            // position: "relative",
            minHeight: "500px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "50%",

            // right: 0,
          }}
          // variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#05153C"
            >
              <strong>Get your resume score!</strong>
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 4, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </>

          <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
        </Paper>
        {/* </Container> */}
        <div
          style={{
            width: "50%",
            // height: "90%",
            marginRight: "10%",
            marginLeft: "5%",
            marginTop: "2%",
            position: "relative",
            top: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                alignItems: "center",
              }}
            >
              <Button
                style={{
                  textTransform: "none",
                  marginRight: "10px",
                }}
                // variant={!index ? "contained" : "text"}
                variant="text"
                onClick={() => setIndex(0)}
              >
                {!index ? (
                  <Typography variant="h4" align="center" color="#05153C">
                    <strong>About this tool</strong>
                  </Typography>
                ) : (
                  <Typography variant="h6" align="center" color="#05153C">
                    <strong>About this tool</strong>
                  </Typography>
                )}
              </Button>

              <Button
                variant="text"
                style={{
                  textTransform: "none",
                  marginLeft: "10px",
                }}
                onClick={() => setIndex(1)}
              >
                {index ? (
                  <Typography variant="h4" align="center" color="#05153C">
                    <strong>How to use</strong>
                  </Typography>
                ) : (
                  <Typography variant="h6" align="center" color="#05153C">
                    <strong>How to use</strong>
                  </Typography>
                )}
              </Button>
            </div>
          </div>
          <div style={{}}>
            {index ? (
              <AccordionUsage />
            ) : (
              <div
                style={{
                  alignSelf: "center",
                  marginTop: "10%",
                  textAlign: "center",
                  width: "90%",
                  marginLeft: "5%",
                  alignSelf: "center",
                }}
              >
                <Typography variant="h6" color="#04123B">
                  The <strong> Resume Score Calculator </strong>is a powerful
                  online tool designed to help job seekers assess the
                  effectiveness of their resumes in relation to specific job
                  postings. By pasting the job post URL and uploading their
                  resume, users can receive an instant score that evaluates
                  their resume's alignment with the requirements and
                  expectations outlined in the job listing. With its
                  user-friendly interface and insights on experience and skills,
                  the Resume Score Calculator gives job seekers how close they
                  are to the job requirements posted by the company.
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
