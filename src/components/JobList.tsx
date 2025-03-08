import React from "react";
import JobCard from "./JobCard.tsx";
import { jobs } from "../jobsData.ts";

const JobList: React.FC = () => {
  return (
    <div>
      <h2>List of Jobs Available</h2>
      {jobs.length > 3 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;