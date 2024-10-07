import * as React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Background from "../assets/background.jpg";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import StatsPie from "./StatsPie";
import StatsLine from "./StatsLine";

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "16px",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            width: "90%",
            maxWidth: { xs: "100%", sm: "600px" },
          }}
        >
          {/* Background Layer with Opacity */}
          <Box
            sx={{
              backgroundColor: "black",
              borderRadius: "16px",
              opacity: 0.5,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              border: "1px solid black",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></Box>
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <AddExpense />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            opacity: 0.9,
            padding: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "100%",
            maxWidth: { xs: "100%", sm: "600px" },
          }}
        >
          <Typography variant="h5" sx={{ color: "#1f2d4d", fontWeight: 700 }}>
            Expense Distribution
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <StatsPie /> {/* Pie Chart */}
            <StatsLine /> {/* Line Chart */}
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "black",
          borderRadius: "16px",
          padding: "40px",
          opacity: 0.7,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
          marginTop: "32px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            padding: "20px",
            borderRadius: "16px",
            backgroundColor: "white",
          }}
        >
          <Typography variant="h5" sx={{ color: "#1f2d4d", fontWeight: 700 }}>
            <ExpenseList />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
