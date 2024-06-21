import React from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Paper } from "@mui/material";

const TotalActivityChart = ({ selectedUserData }) => {
  if (!selectedUserData || !selectedUserData.totalActivity) {
    return <div>Loading...</div>;
  }

  const activityLabels = selectedUserData.totalActivity.map(
    (activity) => activity.name
  );
  const seriesData = [
    {
      name: "Activity Count",
      data: selectedUserData.totalActivity.map((activity) =>
        parseInt(activity.value, 10)
      ),
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 215,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [5],
      dashArray: [0],
    },
    xaxis: {
      categories: activityLabels,
      title: {
        text: "Activities",
        style: {
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          fontSize: "13px",
        },
      },
      labels: {
        style: {
          fontFamily: "Roboto, sans-serif",
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
        style: {
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          fontSize: "13px",
        },
      },
      labels: {
        style: {
          fontFamily: "Roboto, sans-serif",
          fontSize: "10px",
        },
      },
    },
    legend: {
      show: false,
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.8,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },

    grid: {
      borderColor: "#C9CBCD",
      strokeDashArray: 3,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#555ac3"],
  };

  return (
    <Paper
      sx={{
        paddingTop: "1px",
        width: "500px",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ margin: "20px" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
          Total Activity Chart
        </Typography>
        <Chart options={options} series={seriesData} type="line" height={215} />
      </Box>
    </Paper>
  );
};

export default TotalActivityChart;
