import {
  AppBar,
  Box,
  Button,
  Fab,
  IconButton,
  Link,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const pages = ['Work', 'About Me'];

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Pages = styled(MenuItem) (( { theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box) (( { theme }) => ({
  backgroundColor: "white"
}));



const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      bgcolor="skyblue"
      flex={1}
      p={2}

    >
      <StyledToolbar>
        <Typography variant="h6">Daichi Furukawa</Typography>
        <MenuItem key={pages}>
          <Typography textAlign="center">{pages}</Typography>
        </MenuItem>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar> 
  );
};

export default Navbar;
