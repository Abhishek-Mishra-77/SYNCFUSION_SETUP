import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./admin/Layout";
import DashboardData from "./admin/DashboardData";
import ChartDetailed from "./charts/ChartDetailed";

const Dashboard = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* Nested Route for Line Chart */}
      <Route index element={<DashboardData />} />
      <Route path="/:chartType" element={<ChartDetailed />} />
    </Route>
  </Routes>
  );
};

export default Dashboard;
