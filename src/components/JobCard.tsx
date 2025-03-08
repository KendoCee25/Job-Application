import React, { useState } from "react";

interface JobProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
  };
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card" style={{ border: "1px solid #ddd", padding: "10px", margin: "20px", borderRadius: "5px" }}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
        </div>
      )}
    </div>
  );
};

export default JobCard;