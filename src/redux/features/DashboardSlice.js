import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mockServerAddress =
  "https://16ddbe54-ae23-42af-a7fc-7764d45dde9d.mock.pstmn.io";

export const getActivityData = createAsyncThunk(
  "dashboard/activity",
  async () => {
    return axios
      .get(`${mockServerAddress}/activity`)
      .then((response) => response.data.data);
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    activityData: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getActivityData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getActivityData.fulfilled, (state, action) => {
      state.loading = false;
      state.activityData = action.payload;
      state.error = "";
    });
    builder.addCase(getActivityData.rejected, (state, action) => {
      state.loading = false;
      state.activityData = [];
      state.error = action.error.message;
    });
  },
});

export default dashboardSlice.reducer;
