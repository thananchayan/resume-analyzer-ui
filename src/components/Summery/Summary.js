// src/components/Summary.js
import React from "react";
import "./Summary.css";
import ResumeCard from "../Resumecard/ResumeCard";
import Recommendation from "../Recommendation/Recommendation";

const Summary = () => {

  const result = {
    basicInfo: {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      experience: "Intermediate",
    },
    summary:
      "John Doe is a frontend developer with 3+ years of experience in React and Redux.",
    jobRole: "Frontend Developer",
    recommendedSkills: ["React", "Redux", "JavaScript", "TypeScript"],
  };

  return (
   <div className="summary-container">
<h1 className="resume-title">Resume Analysis</h1>


  {/* Basic Info */}

    <ResumeCard data={result.basicInfo} />
 

  {/* Resume Summary */}
  <div className="summary-card">
    <h2 className="summary-title">Resume Summary</h2>
    <p className="summary-text">{result.summary}</p>
  </div>

  {/* Job Role + Recommended Skills */}
  
    <Recommendation
      jobRole={result.jobRole}
      skills={result.recommendedSkills}
    />
  
</div>

  );
};

export default Summary;
