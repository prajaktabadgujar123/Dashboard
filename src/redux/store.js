import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./features/DashboardSlice";
export default configureStore({
  reducer: {
    activityData: DashboardReducer,
  },
});
