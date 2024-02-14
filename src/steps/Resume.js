import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function Resume({ currentStep, changeStep, setResumeScore }) {
  const [loading, setLoading] = React.useState(false);

  const resumeName = localStorage.getItem("resumeName");
  const resumePath = localStorage.getItem("resumePath");
  const jobData = localStorage.getItem("jobData");

  const handleNext = async () => {
    setLoading(true);
    const fetchedData = await axios.post(
      "http://localhost:5000/api/v1/resumeScore",
      { resumePath: resumePath, jobData: jobData }
    );
    console.log(fetchedData.data);
    setResumeScore(fetchedData.data.score);
    changeStep(currentStep + 1);
  };

  return (
    <div>
      {!loading && (
        <React.Fragment>
          <Typography variant="h6" color="#28a745" gutterBottom>
            <strong>Resume uploaded successfully : {resumeName}</strong>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              Continue
            </Button>
          </Box>
        </React.Fragment>
      )}

      {loading && (
        <>
          <Typography variant="h6" color="#1565c0" gutterBottom>
            <strong>Calculating Score</strong>
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
    </div>
  );
}
