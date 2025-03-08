import React from "react";
import JobList from "./components/JobList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Job Application</h1>
      <JobList />
    </div>
  );
};

export default App;