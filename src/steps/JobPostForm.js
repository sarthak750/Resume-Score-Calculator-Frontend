import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import JobData from "./JobData";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function JobPostForm({ currentStep, changeStep }) {
  const [jobUrl, setJobUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [jobPostData, setJobPostData] = React.useState(null);

  const handleChange = (event) => {
    setJobUrl(event.target.value);
  };

  const isValidJobPostUrl = (url) => {
    const linkedinRegex =
      /^https?:\/\/(www\.)?(?:[a-z]{2}\.)?linkedin\.com\/jobs\/.*$/;
    // const indeedRegex = /^https?:\/\/(?:www\.)(?:[a-z]{2}\.)?indeed\.com\/.+$/;
    // const indeedRegex = /^https?:\/.*$/;
    const indeedRegex =
      /^https?:\/\/(?:[a-z]{2,3}\.)?indeed\.(?:com|[a-z]{2,3})\/viewjob\?jk=[a-zA-Z0-9_-]+/;

    if (linkedinRegex.test(url)) {
      return "linkedin";
    } else if (indeedRegex.test(url)) {
      return "indeed";
    } else {
      return false;
    }
  };

  const handleNext = async () => {
    if (jobUrl.trim() === "") {
      setErrorMessage("Please provide the url first");
    } else if (!isValidJobPostUrl(jobUrl)) {
      setErrorMessage("Not a valid job post url");
    } else {
      const site = isValidJobPostUrl(jobUrl);
      setErrorMessage("");
      setLoading(true);
      const fetchedData = await axios.post(
        "http://localhost:5000/api/v1/jobParser",
        { url: jobUrl, jobPlatform: site }
      );
      console.log(fetchedData.data);

      const fetchedDataString = JSON.stringify(fetchedData.data);

      localStorage.setItem("jobData", fetchedDataString);
      setJobPostData(fetchedDataString);
      setLoading(false);
      setJobUrl("");
    }
  };

  return (
    <div>
      {!loading && !jobPostData && (
        <React.Fragment>
          <Typography variant="h6" color="#8E90BE" gutterBottom>
            Provide Job Post Url
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                value={jobUrl}
                id="jobUrl"
                name="jobUrl"
                label="Paste Job Url"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {errorMessage && (
            <p>
              <strong style={{ color: "red" }}>{errorMessage}</strong>
            </p>
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{
                backgroundColor: "#43AE45",
                color: "#FFFF",
                fontSize: "20px",
                borderRadius: "10px",
              }}
              onClick={handleNext}
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
            >
              <strong>Continue</strong>
            </Button>
          </Box>
        </React.Fragment>
      )}
      {loading && (
        <>
          <Typography variant="h5" color="#8E90BE" gutterBottom>
            <strong>Fetching Data</strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        </>
      )}
      {jobPostData && (
        <JobData
          currentStep={currentStep}
          changeStep={changeStep}
          jobPostData={jobPostData}
          setJobPostData={setJobPostData}
        />
      )}
    </div>
  );
}
