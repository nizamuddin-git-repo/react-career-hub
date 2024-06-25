import placeholderImg from '../../assets/images/404.jpg'
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({job}) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary}= job;

    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className='py-2 px-6 font-extrabold border rounded border-sky-400 text-sky-700 mr-4'>{remote_or_onsite}</button>
        <button className='py-2 px-6 font-extrabold border rounded border-sky-400 text-sky-700'>{job_type}</button>
    </div>
    <div className='mt-4 flex gap-2'>
        <h2 className='flex'><MdLocationOn className='text-2xl mr-3'></MdLocationOn>{location}</h2>
        <h2 className='flex'><AiOutlineDollar className='text-2xl'></AiOutlineDollar>{salary}</h2>
    </div>
    <div className="card-actions mt-3">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary border-0  bg-gradient-to-r from-blue-400 to-blue-700 hover:to-blue-700">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;