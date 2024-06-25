import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="mt-10">
        <h1 className="text-5xl text-center">Featured Jobs : {jobs.length}</h1>
        <p className="text-xs text-center mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-6">
        {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={` flex justify-center mt-3 ${dataLength === jobs.length && 'hidden'}`}>
        <button 
        onClick={()=> setDataLength(jobs.length)}
        className="btn btn-primary border-0  bg-gradient-to-r from-blue-400 to-blue-700 hover:to-blue-700">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
