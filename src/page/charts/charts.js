import React from "react";
import FieldRecommendationChart from "../../components/Admin/graphs/fieldrecomentationchart/fieldrecomentationgraph";
import ResumeScoreChart from "../../components/Admin/graphs/userscore/userscore";
import "./charts.css";

const ChartsDashboard = ({ users }) => {
  return (
    <div className="charts-dashboard">
      <h1 className="dashboard-title">📊 Analytics Dashboard</h1>

      <div className="chart-row">
        <div className="chart-wrapper">
          <FieldRecommendationChart users={users} />
        </div>

        <div className="chart-wrapper">
          <ResumeScoreChart users={users} />
        </div>
      </div>
    </div>
  );
};

export default ChartsDashboard;
