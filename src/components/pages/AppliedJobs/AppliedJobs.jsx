import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageBanner from '../../Utilities/PageBanner';
import { getStoredJonApplication } from '../../Utilities/localStorage';

const AppliedJobs = () => {
  const [applied, setApplied] = useState([]);

  const jobs = useLoaderData();

  useEffect(() => {
    const storedApplication = getStoredJonApplication();
    if (jobs.length) {
      const application = jobs?.filter((job) => storedApplication?.includes(job.id));
      setApplied(application);
    }
  }, []);

  return (
    <div className="container mx-auto max-sm:px-5">
      <PageBanner title="Applied Jobs"></PageBanner>
      <div className="my-32 space-y-4">
        {applied.map((job) => (
          <div key={job.id} className="border p-7 rounded-lg flex max-lg:flex-col gap-8">
            <div className="bg-[#F4F4F4] p-11 h-60 w-60 flex justify-center items-center rounded-lg ">
              <img className="w-full" src={job?.logo} alt="" />
            </div>
            <div className="flex max-md:flex-col justify-between md:items-center md:w-full gap-6">
              <div className="space-y-3">
                <h3 className="text-2xl text-[#474747] font-extrabold">{job?.job_title}</h3>
                <p className="text-lg text-body font-semibold">{job?.company_name}</p>
                <div className="flex gap-4">
                  <span className="border border-[#7E90FE] py-2 px-5 theme-text font-extrabold rounded-lg">
                    {job?.remote_or_onsite}
                  </span>
                  <span className="border border-[#7E90FE] py-2 px-5 theme-text font-extrabold rounded-lg">
                    {job?.job_type}
                  </span>
                </div>
                <div className="flex max-xl:flex-col gap-6">
                  <div className="flex gap-2 items-center">
                    <img className="self-center" src="./src/assets/icons/Location.png" alt="Location" />
                    <p className="text-xl font-semibold text-body">{job?.location}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img className="self-center" src="./src/assets/icons/money.png" alt="Location" />
                    <p className="text-xl font-semibold text-body">Salary: {job?.salary}</p>
                  </div>
                </div>
              </div>
              <div>
                <Link to={`/job/${job?.id}`} className="btn theme-bg text-white">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
