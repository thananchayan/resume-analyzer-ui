// src/components/FieldRecommendationChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./fieldrecomentationgraph.css";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const FieldRecommendationChart = () => {
  const data = {
    labels: ["Web Development", "Data Science", "IOS Development", "UI-UX Development"],
    datasets: [
      {
        data: [66.7, 13.3, 13.3, 6.7], // dummy values
        backgroundColor: ["#E8EB52", "#B6DA56", "#7DCC7E", "#3CA580"],
         borderWidth: 0,       
        borderColor: "transparent", 
       
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
