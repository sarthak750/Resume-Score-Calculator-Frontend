import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DOMPurify from "dompurify";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function JobData({
  currentStep,
  changeStep,
  jobPostData,
  setJobPostData,
}) {
  const jobPlatform = JSON.parse(jobPostData).jobPlatform;
  let companyNameLinkedIn = "";
  let jobTitleLinkedIn = "";
  let jobSkillsLinkedIn = "";
  let jobDescriptionLinkedIn = "";

  let companyNameIndeed = "";
  let jobLocationIndeed = "";
  let jobTitleIndeed = "";
  let jobSalaryAndJobTypeIndeed = "";
  let jobDescriptionIndeed = "";

  const handleBack = () => {
    localStorage.removeItem("jobData");
    setJobPostData("");
  };

  const fixSelfClosingTags = (htmlContent) => {
    return htmlContent.replace(/<(\w+)([^>]*)>(<\/\1>)?/g, "<$1$2 />");
  };

  const handleNext = () => {
    changeStep(currentStep + 1);
  };

  if (jobPlatform === "linkedin") {
    const jobPostDataObject = JSON.parse(jobPostData).jobData;

    companyNameLinkedIn = jobPostDataObject.companyNameLinkedIn;
    jobTitleLinkedIn = jobPostDataObject.jobTitleLinkedIn;
    jobSkillsLinkedIn = jobPostDataObject.jobSkillsLinkedIn;

    jobDescriptionLinkedIn = jobPostDataObject.jobDescriptionLinkedIn;
    // jobDescriptionLinkedIn = fixSelfClosingTags(jobDescriptionLinkedIn);
    // jobDescriptionLinkedIn = DOMPurify.sanitize(jobDescriptionLinkedIn);
  } else {
    const jobPostDataObject = JSON.parse(jobPostData).jobData;
    companyNameIndeed = jobPostDataObject.comapanyNameIndeed;
    jobLocationIndeed = jobPostDataObject.jobLocationIndeed;
    jobTitleIndeed = jobPostDataObject.jobTitleIndeed;
    jobSalaryAndJobTypeIndeed = jobPostDataObject.jobSalaryAndJobTypeIndeed;
    jobDescriptionIndeed = jobPostDataObject.jobDescriptionIndeed;
    jobDescriptionIndeed = fixSelfClosingTags(jobDescriptionIndeed);
    jobDescriptionIndeed = DOMPurify.sanitize(jobDescriptionIndeed);
  }

  return (
    <React.Fragment>
      <Typography variant="h5" color="#8E90BE" gutterBottom>
        Job Data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {jobPlatform === "linkedin" ? (
            <div>
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Job Title :</strong> <span>{jobTitleLinkedIn}</span>
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Company Related Details : </strong>{" "}
                  <span>{companyNameLinkedIn}</span>
                </Typography>
              }

              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Job Skills :</strong> <span>{jobSkillsLinkedIn}</span>
                </Typography>
              }

              {/* <Typography gutterBottom>
                {jobAdditionalDataLinkedIn.map((item, index) => (
                  <div key={index}>
                    <h3>
                      {item.h3Text} : <span>{item.spanText}</span>
                    </h3>
                  </div>
                ))}
              </Typography> */}
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  {/* <strong>Job Description :</strong>
                  <p>{jobDescriptionLinkedIn}</p> */}
                  <Accordion
                    // defaultExpanded
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      borderRadius: "20px",
                      // alignContent: "center",
                      backgroundColor: "#F6F8FD",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography variant="h5" color="#05153C">
                        <strong> Job Description </strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobDescriptionLinkedIn,
                        }}
                      />
                      {/* {jobDescriptionLinkedIn} */}
                    </AccordionDetails>
                  </Accordion>
                </Typography>
              }
            </div>
          ) : jobPlatform === "indeed" ? (
            <div>
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Comapny Name : </strong>

                  <span>{companyNameIndeed}</span>
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong style={{ display: "inline-block" }}>
                    Location :{" "}
                  </strong>
                  <span>{jobLocationIndeed}</span>
                  {/* <div
                    style={{ display: "inline-block", marginLeft: "10px" }}
                    dangerouslySetInnerHTML={{ __html: jobLocationIndeed }}
                  /> */}
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong style={{ display: "inline-block" }}>
                    Job Title :
                  </strong>
                  <span>{jobTitleIndeed}</span>
                  {/* <div
                    style={{ display: "inline-block", marginLeft: "10px" }}
                    dangerouslySetInnerHTML={{ __html: jobTitleIndeed }}
                  /> */}
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong style={{ display: "inline-block" }}>
                    Salary and Type :
                  </strong>
                  <div
                    style={{ display: "inline-block", marginLeft: "10px" }}
                    dangerouslySetInnerHTML={{
                      __html: jobSalaryAndJobTypeIndeed,
                    }}
                  />
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <Accordion
                    // defaultExpanded
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      borderRadius: "20px",
                      // alignContent: "center",
                      backgroundColor: "#F6F8FD",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography variant="h5" color="#05153C">
                        <strong> Job Description </strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: jobDescriptionIndeed,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                </Typography>
              }
            </div>
          ) : null}
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={handleBack}
          style={{ fontSize: "20px", borderRadius: "10px" }}
          sx={{ mt: 3, ml: 1 }}
        >
          <strong>Back</strong>
        </Button>
        <Button
          onClick={handleNext}
          style={{
            backgroundColor: "#43AE45",
            color: "#FFFF",
            fontSize: "20px",
            borderRadius: "10px",
          }}
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
        >
          <strong>Continue</strong>
        </Button>
      </Box>
    </React.Fragment>
  );
}
