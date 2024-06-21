import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Typography, Paper } from "@mui/material";

const ProgressChart = ({ selectedUserData }) => {
  if (!selectedUserData || !selectedUserData.totalActivity) {
    return <div>Loading...</div>;
  }
  const Options = {
    chart: {
      height: 260,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -175,
        endAngle: 185,
        hollow: {
          margin: 0,
          size: "65%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: false,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#E8F2F8",
          strokeWidth: "80%",
          margin: 1, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: false,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            offsetY: 10,
            color: "#292D30",
            fontSize: "28px",
            fontWeight: "500",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#555ac3"],
  };

  const Series = [75];

  return (
    <Paper
      elevation={1}
      sx={{
        height: "240px",
        width: "220px",
        borderRadius: "15px",
        marginLeft: "40px",
        marginTop: "10px",
      }}
    >
      <Box sx={{ margin: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            Progress
          </Typography>
        </Box>
        <Box position="relative">
          <ReactApexChart
            options={Options}
            series={Series}
            type="radialBar"
            height={200}
          />

          {/* Top Right Circle */}
          <Box
            position="absolute"
            top={10}
            left={50}
            width={37}
            height={37}
            borderRadius="50%"
            backgroundColor="#fff" // Set the background color
            boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)" // Add box shadow
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
              07
            </Typography>
          </Box>

          {/* Bottom Left Circle */}
          <Box
            position="absolute"
            bottom={10}
            right={45}
            width={37}
            height={37}
            borderRadius="50%"
            backgroundColor="#fff" // Set the background color
            boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)" // Add box shadow
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
              03
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProgressChart;
