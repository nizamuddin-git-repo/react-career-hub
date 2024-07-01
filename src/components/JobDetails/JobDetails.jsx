import { useLoaderData, useParams } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStoage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const {
    company_name,
    address,
    email,
    phone,
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

      const handleApplyJob = ()=>{
        saveJobApplication(idInt);
        toast('You Have Applied Successfully')
      }

  return (
    <div>
      <Helmet>
        <title>
        Job Details
        </title>
      </Helmet>
      <div className="flex justify-between">
        <div>
          <img src={bg1} alt="" />
        </div>
        <h1 className="text-2xl font-bold mt-10">Job Details</h1>
        <div>
          <img src={bg2} alt="" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4 mt-20">
        <div className="border md:col-span-3 pl-3 pt-2">
          <p className="text-xs font-bold text-slate-500"><span className="text-black text-base">Job Description :</span> {job_description}</p>
          <p className="text-xs font-bold text-slate-500 mt-4"><span className="text-black text-base">Job Responsibility: </span> {job_responsibility}</p>
          <p className="text-xs font-bold text-slate-500 mt-4"><span className="text-black 
          text-base">Educational Requirements: </span> <br /> <br />{educational_requirements}</p>

          <p className="text-xs font-bold text-slate-500 mt-4"><span className="text-black text-base">Experiences: <br /> <br /> </span> {experiences}</p>
        </div>
        <div className="border">
          <h2 className="text-xl font-bold p-3">Job Details</h2>
          <hr />
          <p className="text-xs font-bold text-slate-500 p-4"><span className="text-black text-base">Salary : </span>{salary}</p>
          <p className="text-xs font-bold text-slate-500 p-4"><span className="text-black text-base">Job Title : </span>{job_title}</p>
          <p className="text-black text-base font-bold p-3">Contact Information</p>
          <hr />
          <p className="text-xs font-bold text-slate-500 p-4"><span className="text-black text-base">Phone : </span>{contact_information.phone}</p>
          <p className="text-xs font-bold text-slate-500 p-4"><span className="text-black text-base">Email: </span>{contact_information .email}</p>
          <p className="text-xs font-bold text-slate-500 p-4"><span className="text-black text-base">Address :</span>{contact_information.address}</p>
          <button onClick={handleApplyJob} className="p-2 rounded-lg  btn-primary border-0  bg-gradient-to-r from-blue-400 to-blue-700 hover:to-blue-700 w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
