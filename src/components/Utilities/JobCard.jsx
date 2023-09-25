import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="border border-[#E8E8E8] rounded-lg p-10">
      <img src={logo} alt={`Image of ${company_name}`} />
      <div className="space-y-4">
        <h4 className="text-2xl text-[#474747] mt-8 font-extrabold">{job_title}</h4>
        <p className="text-lg text-body font-semibold">{company_name}</p>
        <div className="flex gap-4">
          <span className="border border-[#7E90FE] py-2 px-5 theme-text font-extrabold rounded-lg">
            {remote_or_onsite}
          </span>
          <span className="border border-[#7E90FE] py-2 px-5 theme-text font-extrabold rounded-lg">{job_type}</span>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <img className="self-center" src="./src/assets/icons/Location.png" alt="Location" />
            <p className="text-xl font-semibold text-body">{location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img className="self-center" src="./src/assets/icons/money.png" alt="Location" />
            <p className="text-xl font-semibold text-body">Salary: {salary}</p>
          </div>
        </div>
        <Link className="btn theme-bg text-white">View Details</Link>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
