// src/App.js
import React, { useState } from 'react';
import UploadResume from './components/UploadResume';
import Summary from './components/Summary';
import Recommendation from './components/Recommendation';
import ResumeCard from './components/ResumeCard';

function App() {
  const [result, setResult] = useState(null);

  const handleResult = (data) => {
    setResult(data);
  };

  return (
    <div className="App">
      <h1>AI Resume Analyzer</h1>
      <UploadResume onResult={handleResult} />
      <ResumeCard data={result?.basicInfo} />
      <Summary summary={result?.summary} />
      <Recommendation jobRole={result?.jobRole} skills={result?.recommendedSkills} />
    </div>
  );
}

export default App;
