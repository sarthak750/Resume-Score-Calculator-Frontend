import * as React from "react";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function ResumeScore({ resumeScore, changeStep }) {
  const handleNext = () => {
    changeStep(0);
  };
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        color="#1565c0"
        sx={{ marginBottom: "30px" }}
        gutterBottom
      >
        <strong>
          Resume Score : <span>{resumeScore.overallScore}</span>
        </strong>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" color="#1565c0" gutterBottom>
            <strong>Individual Scores :</strong>
          </Typography>
          <Typography variant="h6" color="#28a745" gutterBottom>
            <strong>
              Skills Score : <span>{resumeScore.skillsScore}</span>
            </strong>
          </Typography>

          <Typography variant="h6" color="#28a745" gutterBottom>
            <strong>
              Experience Score : <span>{resumeScore.experienceScore}</span>
            </strong>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
      </Box>
    </React.Fragment>
  );
}
