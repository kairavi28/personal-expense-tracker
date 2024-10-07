import React from "react";
import { Box, Typography } from "@mui/material";
import StatsLine from "../components/StatsLine";
import StatsPie from "../components/StatsPie";
import Background from "../assets/background.jpg";

const Stats = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundImage: `url(${Background})`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
        <Box
      sx={{
        padding: "30px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        backgroundPosition: "center",
        minHeight: "100vh",
        borderRadius: "2rem",
      }}
    >
      <Typography variant="h4">Statistics</Typography>
      <StatsLine/>
      <StatsPie />
      </Box>
    </Box>
  );
};

export default Stats;