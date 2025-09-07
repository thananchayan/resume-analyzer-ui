// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./page/homepage/homepage";
import Summary from "./components/Summery/Summary";
import Layout from "./components/Layout";
import AdminLogin from "./components/Admin/Login/adminlogin";
import UserTable from "./components/Admin/usertable/usertable";
import ChartsDashboard from "./page/charts/charts";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-login" element={
            <AdminLogin />
          } />
          <Route path="/summary" element={<Summary />} />
          <Route path="/user-table" element={<UserTable />} />
          <Route path="/chart-dashboard" element={<ChartsDashboard/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
