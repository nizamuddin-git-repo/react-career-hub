import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStoage";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import AppliedJobsDetail from "../AppliedJobsDetail/AppliedJobsDetail";


const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

 const hadleJobsFilter = (filter) => {
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }
    else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
    }
 }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter( job => storedJobIds.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, [jobs]);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img src={bg1} alt="" />
        </div>
        <h1 className="text-2xl font-bold mt-10">Applied Jobs</h1>
        <div>
          <img src={bg2} alt="" />
        </div>
      </div>
      <div className="mt-14">
        <div className="flex justify-end">
        <details className="dropdown">
  <summary className="btn m-1">Open Or Close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=> hadleJobsFilter('all')}><a>All</a></li>
    <li onClick={()=> hadleJobsFilter('remote')}><a>Remote</a></li>
    <li onClick={()=> hadleJobsFilter('onsite')}><a>Onsite</a></li>
  </ul>
</details>
        </div>
        {
            displayJobs.map(job => <AppliedJobsDetail key={job.id} job={job}></AppliedJobsDetail>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
