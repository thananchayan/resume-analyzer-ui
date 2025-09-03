// src/components/Recommendation.js
import React from 'react';

const Recommendation = ({ jobRole, skills }) => {
  if (!jobRole && (!skills || skills.length === 0)) return null;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Job Role Prediction</h2>
      <p><strong>{jobRole}</strong></p>

      <h3>Recommended Skills</h3>
      <ul>
        {skills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
