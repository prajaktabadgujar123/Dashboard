import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import {
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const ActivityChart = ({ selectedUserData }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    if (
      selectedUserData &&
      selectedUserData.dayWiseActivity &&
      selectedUserData.dayWiseActivity.length > 0
    ) {
      setSelectedDate(selectedUserData.dayWiseActivity[0].date);
      setActivityData(selectedUserData.dayWiseActivity[0].items.children || []);
    }
  }, [selectedUserData]);

  const handleChangeDate = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    const selectedDayActivity = selectedUserData.dayWiseActivity.find(
      (day) => day.date === date
    );
    if (selectedDayActivity) {
      setActivityData(selectedDayActivity.items.children || []);
    }
  };

  if (!selectedUserData || !selectedUserData.totalActivity || !activityData) {
    return <div>Loading...</div>;
  }

  const activityLabels = selectedUserData.totalActivity.map(
    (activity) => activity.name
  );
  const seriesData = [
    {
      name: "Activity Count",
      data: activityData.map((item) => parseInt(item.count, 10)),
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 360,
    },
    plotOptions: {
      bar: {
        columnWidth: "35%",
        horizontal: false,
        distributed: true,
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
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
    },
    colors: activityData.map((item) => item.fillColor),
    legend: {
      show: false,
    },
  };

  const dateOptions = selectedUserData.dayWiseActivity.map((day) => (
    <MenuItem
      key={day.date}
      value={day.date}
      sx={{ fontSize: "14px", fontWeight: "500" }}
    >
      {day.date}
    </MenuItem>
  ));

  return (
    <Paper
      sx={{
        marginTop: "30px",
        paddingTop: "1px",
        width: "860px",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ margin: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Activity Chart
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <label htmlFor="date-select">
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                Select Date :{" "}
              </Typography>
            </label>
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
              <Select
                labelId="date-select-label"
                id="date-select"
                value={selectedDate}
                onChange={handleChangeDate}
                displayEmpty
                inputProps={{ "aria-label": "Select Date" }}
                sx={{
                  height: 20,
                  marginLeft: "5px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {dateOptions}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {seriesData[0].data && seriesData[0].data.length > 0 ? (
          <Chart
            options={options}
            series={seriesData}
            type="bar"
            height={360}
          />
        ) : (
          <Typography>No data available for the selected date.</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default ActivityChart;
