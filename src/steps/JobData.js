import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DOMPurify from "dompurify";

export default function JobData({
  currentStep,
  changeStep,
  jobPostData,
  setJobPostData,
}) {
  const jobPlatform = JSON.parse(jobPostData).jobPlatform;
  let comapanyNameLinkedIn = "";
  let jobTitleLinkedIn = "";
  let jobLocationLinkedIn = "";
  let jobAdditionalDataLinkedIn = "";
  let jobDescriptionLinkedIn = "";
  let comapanyNameIndeed = "";
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
    comapanyNameLinkedIn = jobPostDataObject.comapanyName;
    jobTitleLinkedIn = jobPostDataObject.jobTitleContent;
    jobLocationLinkedIn = jobPostDataObject.jobLocationContent;
    jobAdditionalDataLinkedIn = jobPostDataObject.jobAdditionalData;
    jobDescriptionLinkedIn = jobPostDataObject.jobDescriptionContent;
    jobDescriptionLinkedIn = fixSelfClosingTags(jobDescriptionLinkedIn);
    jobDescriptionLinkedIn = DOMPurify.sanitize(jobDescriptionLinkedIn);
  } else {
    const jobPostDataObject = JSON.parse(jobPostData).jobData;
    comapanyNameIndeed = jobPostDataObject.comapanyName;
    jobLocationIndeed = jobPostDataObject.jobLocationContent;
    jobTitleIndeed = jobPostDataObject.jobTitleContent;
    jobSalaryAndJobTypeIndeed = jobPostDataObject.jobSalaryAndJobTypeContent;
    jobDescriptionIndeed = jobPostDataObject.jobDescriptionContent;
    jobDescriptionIndeed = fixSelfClosingTags(jobDescriptionIndeed);
    jobDescriptionIndeed = DOMPurify.sanitize(jobDescriptionIndeed);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Job Data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {jobPlatform === "linkedin" ? (
            <div>
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Comapny Name : </strong>{" "}
                  <span>{comapanyNameLinkedIn}</span>
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Job Title :</strong> <span>{jobTitleLinkedIn}</span>
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Job Location :</strong>{" "}
                  <span>{jobLocationLinkedIn}</span>
                </Typography>
              }

              <Typography gutterBottom>
                {jobAdditionalDataLinkedIn.map((item, index) => (
                  <div key={index}>
                    <h3>
                      {item.h3Text} : <span>{item.spanText}</span>
                    </h3>
                  </div>
                ))}
              </Typography>
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Job Description :</strong>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: jobDescriptionLinkedIn,
                    }}
                  />
                </Typography>
              }
            </div>
          ) : jobPlatform === "indeed" ? (
            <div>
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong>Comapny Name : </strong>

                  <span>{comapanyNameIndeed}</span>
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong style={{ display: "inline-block" }}>
                    Location :{" "}
                  </strong>
                  <div
                    style={{ display: "inline-block", marginLeft: "10px" }}
                    dangerouslySetInnerHTML={{ __html: jobLocationIndeed }}
                  />
                </Typography>
              }
              {
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  <strong style={{ display: "inline-block" }}>
                    Job Title :
                  </strong>
                  <div
                    style={{ display: "inline-block", marginLeft: "10px" }}
                    dangerouslySetInnerHTML={{ __html: jobTitleIndeed }}
                  />
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
                  <strong>Job Description :</strong>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: jobDescriptionIndeed,
                    }}
                  />
                </Typography>
              }
            </div>
          ) : null}
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button onClick={handleNext} variant="contained" sx={{ mt: 3, ml: 1 }}>
          Continue
        </Button>
      </Box>
    </React.Fragment>
  );
}
