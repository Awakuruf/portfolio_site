import * as React from "react";
import { Button, Fab, IconButton } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./App.css"


function App() {
  // const pages = ["Work", "About"];

  return (
    <div>
    <Button className="github" variant="contained" startIcon={<GitHubIcon/>}> GitHub </Button>
    <Button className="linkedin" variant="contained" startIcon={<LinkedInIcon/>}> LinkedIn </Button>

    <Fab size="small" color = "primary" aria-label="github">
      <GitHubIcon/>
    </Fab>

    <Fab size="small" color = "primary" aria-label="linkedin">
      <LinkedInIcon/>
    </Fab>

    <Button className="resume_button" variant="contained" endIcon={<DownloadIcon/>}>Resume</Button>

    <IconButton aria-label="github" color = "primary" sx={{
      borderRadius: 1,
      bgcolor: "primary",
    }}>
      <GitHubIcon/>
    </IconButton>
    <IconButton aria-label="github" color = "primary" sx={{
      borderRadius: 1,
      bgcolor: "primary",
      backgroundColor: "primary",
      
    }}>
      <LinkedInIcon/>
    </IconButton>

    </div>

  );
}

export default App;
