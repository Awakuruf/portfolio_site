import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const index = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="column" spacing={2} justifyContent="center">
        <Header />
        <Footer />
      </Stack>
    </Box>
  );
};

export default index;
