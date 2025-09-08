import React from "react";
import "./Summary.css";

const Summary = ({ summary, score }) => {
  if (!summary) return null;

  return (
    <div className="summary-container">
     

      {/* Resume Summary */}
      <div className="summary-card">
        <h2 className="summary-title">Resume Summary</h2>
        <p className="summary-text">{summary}</p>
      </div>

      {/* Resume Score */}
      <div className="summary-card">
        <h2 className="summary-title">Resume Score</h2>
        <p className="summary-text">{score}/100</p>
      </div>
    </div>
  );
};

export default Summary;
