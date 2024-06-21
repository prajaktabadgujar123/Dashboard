import React from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Paper } from "@mui/material";

const PieChart = ({ selectedUserData }) => {
  if (!selectedUserData || !selectedUserData.totalActivity) {
    return <div>Loading...</div>;
  }

  const activityLabels = selectedUserData.totalActivity.map(
    (activity) => activity.name
  );
  const seriesData = selectedUserData.totalActivity.map((activity) =>
    parseInt(activity.value, 10)
  );

  const colors = selectedUserData.dayWiseActivity[0].items.children.map(
    (item) => item.fillColor
  );

  const options = {
    chart: {
      type: "pie",
      height: 210,
    },
    dataLabels: {
      enabled: false,
    },
    labels: activityLabels,
    colors: colors,
    legend: {
      show: false,
    },
  };

  return (
    <Paper
      sx={{
        marginTop: "10px",
        paddingTop: "1px",
        width: "240px",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ margin: "20px" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
          Total Activity Pie Chart
        </Typography>
        <Chart options={options} series={seriesData} type="pie" height={210} />
      </Box>
    </Paper>
  );
};

export default PieChart;
