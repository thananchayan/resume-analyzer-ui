// src/components/ResumeScoreChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./userscore.css";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ResumeScoreChart = ({ users = [] }) => {
  const labels = users.map((u) => `${u.name} (${u.resume_score})`);
  const scores = users.map((u) => u.resume_score);

  const data = {
    labels,
    datasets: [
      {
        data: scores,
        backgroundColor: [
          "#3a044f", "#500e61", "#781484", "#ab14b8", "#b546bf", "#b66cbd", "#ba90be",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h2>Pie-Chart for Resume Score</h2>
      <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
        From 1 to 100
      </p>
      <Pie data={data} />
    </div>
  );
};


export default ResumeScoreChart;
