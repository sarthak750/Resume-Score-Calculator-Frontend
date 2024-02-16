import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { LinearProgress } from "@mui/material";
import Resume from "./Resume";

export default function ResumeUpload({
  currentStep,
  changeStep,
  setResumeScore,
}) {
  const [file, setFile] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [upload, setUpload] = React.useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setErrorMessage("");
  };

  const handleUpload = async () => {
    if (!file) {
      setErrorMessage("Please choose a resume first");
    } else {
      setErrorMessage("");
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:5000/api/v1/resumeUpload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentage);
          },
        }
      );
      console.log(response.data);
      localStorage.setItem("resumePath", response.data.path);
      localStorage.setItem("resumeName", response.data.fileName);
      setFile(null);
      setProgress(0);
      setErrorMessage("");
      setUpload(true);
    }
  };

  const handleNext = () => {
    changeStep(currentStep + 1);
  };

  if (!upload) {
    return (
      <React.Fragment>
        <Typography variant="h5" color="#8E90BE" gutterBottom>
          <strong>Upload Resume</strong>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ position: "relative" }}>
              <label
                htmlFor="file-upload"
                style={{
                  display: "inline-block",
                  padding: "2px 5px",
                  cursor: "pointer",
                  backgroundColor: "#f2f2f2",
                  color: "#000",
                  borderRadius: "5px",
                  border: "1px solid #000",
                }}
              >
                {file ? file.name : "Choose File"}
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                style={{ position: "absolute", left: "-9999px" }}
                accept=".pdf, .docx, .doc"
              />
            </div>

            {/* <input type="file" onChange={handleFileChange} /> */}
          </Grid>
        </Grid>
        {errorMessage && (
          <p>
            <strong style={{ color: "red" }}>{errorMessage}</strong>
          </p>
        )}
        {progress > 0 && (
          <Box pt={2} pb={2} display="flex" alignItems="center">
            <Box flex="1">
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box pl={2}>
              <Typography variant="body2">{`${Math.round(
                progress
              )}%`}</Typography>
            </Box>
          </Box>
        )}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <Button sx={{ mt: 3, ml: 1 }}>Back</Button> */}

          <Button
            onClick={handleUpload}
            style={{
              backgroundColor: "#43AE45",
              color: "#FFFF",
              fontSize: "20px",
              borderRadius: "10px",
            }}
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
          >
            <strong>Upload File</strong>
          </Button>
        </Box>
      </React.Fragment>
    );
  }

  return (
    <Resume
      currentStep={currentStep}
      changeStep={changeStep}
      setResumeScore={setResumeScore}
    />
  );
}
