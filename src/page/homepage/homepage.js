import React, { useState } from "react";
import axios from "axios";
import "./homepage.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import Summary from "../../components/Summery/Summary";
import ResumeCard from "../../components/Resumecard/ResumeCard";
import Recommendation from "../../components/Recommendation/Recommendation";

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle upload to backend
  const handleUpload = async () => {
    if (!selectedFile) return alert("Please upload a file");

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    setProgress(0);
    setResult(null);

    try {
      const response = await axios.post("http://localhost:8000/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percent);
          }
        },
      });

      setResult(response.data);
    } catch (error) {
      alert("Upload failed");
      console.error(error);
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 1500);
    }
  };

  return (
    <div className="landing">
      {/* Hero Section */}
      <div className="hero">
        <h2 className="hero-subtitle">
          Unlock your career potential with AI-driven resume insights
        </h2>

        <form
          className="resume-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpload();
          }}
        >
          <label className="label">Name</label>
          <input type="text" placeholder="Enter your name" />

          <label className="label">Email</label>
          <input type="email" placeholder="Enter your email" />

          <label className="label">Contact Number</label>
          <input type="tel" placeholder="Enter your phone number" />

          <p className="form-note">
            <strong>Upload your resume, and get smart recommendations</strong>
          </p>

          {/* File Upload Box */}
          <div className="upload-box">
            <FaCloudUploadAlt className="upload-icon" />
            <p>{selectedFile ? selectedFile.name : "Drag and Drop file here"}</p>
            <small>Maximum file size 20MB (.pdf, .docx)</small>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="fileUpload"
            />
            <label htmlFor="fileUpload" className="browse-btn upload-btn">
              Browse File
            </label>
          </div>

          {/* Progress Bar */}
          {loading && (
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          )}

          {/* Loader */}
          {loading && <div className="loader">Processing your resume...</div>}

          {/* Analyze Button */}
          <button
            type="submit"
            className={`browse-btn analyze-btn ${loading ? "loading" : ""}`}
            disabled={loading || !selectedFile}
            style={{ marginTop: "15px" }}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {/* Results Section */}
   {result && (
  <div>
     <h1 className="resume-title">Resume Analysis</h1>
    <ResumeCard data={result.basicInfo} />
    <Summary summary={result.summary} score={result.resume_score} />
    <Recommendation jobRole={result.jobRole} skills={result.recommendedSkills} />
  </div>
)}

      </div>
    </div>
  );
};

export default HomePage;
