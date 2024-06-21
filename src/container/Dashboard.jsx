import React, { useEffect, useState } from "react";
import {
  ActivityChart,
  Header,
  TotalActivityChart,
  PieChart,
  ProgressChart,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getActivityData } from "../redux/features/DashboardSlice";
import { Box } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { activityData } = useSelector((state) => state.activityData);
  const [selectedUser, setSelectedUser] = useState("");
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    if (activityData?.AuthorWorklog?.rows) {
      const usernames = activityData.AuthorWorklog.rows.map((row) => row.name);
      setUsernames(usernames);
      setSelectedUser(usernames[0] || "");
    }
  }, [activityData]);

  useEffect(() => {
    dispatch(getActivityData());
  }, [dispatch]);

  const handleUserChange = (username) => {
    setSelectedUser(username);
  };

  const selectedUserData = activityData?.AuthorWorklog?.rows.find(
    (row) => row.name === selectedUser
  );

  return (
    <>
      <Box
        sx={{
          minWidth: "1410px",
          maxWidth: "1410px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            minWidth: "900px",
            maxWidth: "900px",
          }}
        >
          <Header
            usernames={usernames}
            selectedUser={selectedUser}
            handleUserChange={handleUserChange}
          />
          <ActivityChart selectedUserData={selectedUserData} />
        </Box>
        <Box>
          <TotalActivityChart selectedUserData={selectedUserData} />
          <Box sx={{ display: "flex", marginTop: "0px" }}>
            <PieChart selectedUserData={selectedUserData} />
            <ProgressChart selectedUserData={selectedUserData} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
