import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        defaultExpanded
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          borderRadius: "20px",
          backgroundColor: "#DBE6FD",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" color="#05153C">
            <strong> Paste the Job Post URL</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            fontSize: "14px",
          }}
        >
          Find the job posting for the position you're interested in applying
          for and copy the URL.{" "}
          <strong style={{ color: "red" }}>
            Please paste the job post url opened in a new tab and not from
            collections.
          </strong>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{
          backgroundColor: "#F6F8FD",
          marginTop: "20px",
          marginBottom: "20px",
          borderRadius: "20px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{
            borderRadius: "20px",
          }}
        >
          <Typography variant="h5" color="#05153C">
            <strong>Upload Your Resume</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            fontSize: "14px",
          }}
        >
          Upload your resume file (in PDF format) from your device and upload it
          to the resume score calculator tool. Follow the prompts to select the
          file from its location and initiate the upload process.
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          borderRadius: "20px",

          backgroundColor: "#DBE6FD",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h5" color="#05153C">
            <strong>Get Your Score</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            fontSize: "14px",
          }}
        >
          Hit the Get Your Score button to initiate the analysis process by
          clicking the appropriate button or prompt.
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
        defaultExpanded={true}
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          borderRadius: "20px",

          backgroundColor: "#F6F8FD",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h5" color="#05153C">
            <strong>Review and Take Action</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            fontSize: "14px",
          }}
        >
          Carefully review the score provided by the resume score calculator,
          along with any additional feedback or suggestions it offers. Use this
          information to identify areas for improvement in your resume, such as
          optimizing keywords, highlighting relevant experiences.
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
