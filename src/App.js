import * as React from "react";
import { Button, IconButton } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./App.css"
import { palette } from '@mui/system';



function App() {
  // const pages = ["Work", "About"];

  return (
    <div>
    <Button className="github" variant="contained" startIcon={<GitHubIcon/>}></Button>
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
    }}>
      <LinkedInIcon/>
    </IconButton>

    </div>

  );
}

export default App;
