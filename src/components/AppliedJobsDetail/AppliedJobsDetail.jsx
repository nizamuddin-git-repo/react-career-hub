import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";


const AppliedJobsDetail = ({job}) => {
    console.log(job);

    const {company_name, job_title, location, salary, logo} =job;


    return (
        <div className="card card-side bg-base-100  shadow-xl mt-5">
        <figure>
          <img
            className="p-3"
            src={logo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title p-3">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-3 p-3">
            <button className="btn py-2 px-8 font-extrabold border rounded border-sky-400 text-sky-700 ">
              Remote
            </button>

            <button className="btn py-2 px-8 font-extrabold border rounded border-sky-400 text-sky-700">
              Full Time
            </button>
          </div>
          <div className="mt-4 flex gap-2">
            <h2 className="flex">
              <MdLocationOn className="text-2xl mr-3"></MdLocationOn>{location}
            </h2>
            <h2 className="flex">
              <AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}
            </h2>
          </div>
        </div>
        <div className="card-actions justify-end items-center p-7">
          <button className="btn btn-primary border-0  bg-gradient-to-r from-blue-400 to-blue-700">
            View Details
          </button>
        </div>
      </div>
    );
};

export default AppliedJobsDetail;