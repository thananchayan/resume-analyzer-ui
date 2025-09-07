// src/components/ResumeScoreChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./userscore.css";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ResumeScoreChart = () => {
  const data = {
    labels: ["88", "18", "37", "72", "60", "41", "44"], // dummy score labels
    datasets: [
      {
        data: [40, 20, 13.3, 6.87, 6.87, 6.87, 6.87], // example percentages
        backgroundColor: [
          "#3a044fff", 
          "#500e61ff", 
          "#781484ff", 
          "#ab14b8ff", 
          "#b546bfff", 
          "#b66cbdff", 
          "#ba90beff", 
        ],
        borderWidth: 0,      
        borderColor: "transparent", 
        
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
