import * as React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="column" spacing={2} justifyContent="space-between">
        <Header />
        <Footer />
      </Stack>
    </Box>
  );
}

export default App;
