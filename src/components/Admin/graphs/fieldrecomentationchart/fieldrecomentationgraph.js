// src/components/FieldRecommendationChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./fieldrecomentationgraph.css";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const FieldRecommendationChart = ({ users = [] }) => {
  const roleCounts = users.reduce((acc, u) => {
    acc[u.job_role] = (acc[u.job_role] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        data: Object.values(roleCounts),
        backgroundColor: ["#E8EB52", "#B6DA56", "#7DCC7E", "#3CA580", "#845EC2", "#FF9671"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h2>Pie-Chart for Predicted Field Recommendation</h2>
      <Pie data={data} />
    </div>
  );
};

export default FieldRecommendationChart;
