import { AppBar, Box, Button, Fab, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import "../App.css"
import React from 'react'
import styled from "@emotion/styled";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import theme from "../theme";

const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
  backgroundColor:"white",
  paddingTop:"15px",
})

const Icons = styled(Box) (({ theme }) => ({
  backgroundColor: "white", 
  display: "flex",
  gap: "20px",
  paddingRight:"35px"
}));
 
const pages = ['Projects', 'About'];

const Navbar = () => {  
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#2A28FF',
              textDecoration: 'none',
              paddingLeft: "35px"
            }}
          >
            Daichi Furukawa
          </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#2A28FF"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography color='#2A28FF' textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <OfflineBoltIcon color="#2A28FF" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: "#2A28FF" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#2A28FF',
              textDecoration: 'none',
            }}
          >
            Daichi Furukawa
          </Typography>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href=""
                size="large"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#2A28FF', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Icons>
          <Fab size="small" color="primary" aria-label="linkedin">
            <LinkedInIcon />
          </Fab>
          <Fab size="small" color="primary" aria-label="github">
            <GitHubIcon />
          </Fab>
          <Button
        className="resume_button"
        variant="contained"
        endIcon={<DownloadIcon />}
      >
        Resume
      </Button>
          </Icons>
      </StyledToolBar>
    </AppBar>
  )
}

export default Navbar;
