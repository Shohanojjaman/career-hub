import { useLoaderData, useParams } from 'react-router-dom';
import PageBanner from '../../Utilities/PageBanner';

// React Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utilities/localStorage';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const { phone, email, address } = contact_information;

  const handleApply = () => {
    saveJobApplication(Number(id));
    toast.success('Successfully Applied', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div>
      <PageBanner title="Job Details"></PageBanner>
      <div className="container mx-auto max-sm:px-5 my-32 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-body font-medium leading-loose">
            <span className="text-heading font-extrabold">Job Description:</span>
            {job_description}
          </p>
          <p className="text-body font-medium leading-loose">
            <span className="text-heading font-extrabold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <div className="space-y-4">
            <p className="text-heading font-extrabold leading-loose">Educational Requirements:</p>
            <p className="text-body font-medium leading-loose">{educational_requirements}</p>
          </div>
          <div className="space-y-4">
            <p className="text-heading font-extrabold leading-loose">Experiences:</p>
            <p className="text-body font-medium leading-loose">{experiences}</p>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-l from-[rgba(126,144,254,0.10)] to-[rgba(152,115,255,0.10)] rounded-lg p-7 space-y-6">
            <h4 className="text-heading font-extrabold text-xl">Job Details</h4>
            <hr className="theme-bg h-[2px] opacity-30" />
            <div className="space-y-4">
              <div className="flex gap-2">
                <img className="self-center" src="../assets/icons/money.png" alt="Icon of money" />
                <p className="text-xl font-medium text-body">
                  <span className="font-semibold text-[#474747]">Salary : </span>
                  {salary} (Per Month)
                </p>
              </div>
              <div className="flex gap-2">
                <img className="self-center" src="../assets/icons/calendar.png" alt="Icon of calendar" />
                <p className="text-xl font-medium text-body">
                  <span className="font-semibold text-[#474747]">Job Title : </span>
                  {job_title}
                </p>
              </div>
            </div>
            <h4 className="text-heading font-extrabold text-xl">Contact Information</h4>
            <hr className="theme-bg h-[2px] opacity-30" />
            <div className="space-y-4">
              <div className="flex gap-2">
                <img className="self-center" src="../assets/icons/phone.png" alt="Icon of phone" />
                <p className="text-xl font-medium text-body">
                  <span className="font-semibold text-[#474747]">Phone : </span>
                  {phone}
                </p>
              </div>
              <div className="flex gap-2">
                <img className="self-center" src="../assets/icons/email.png" alt="Icon of email" />
                <p className="text-xl font-medium text-body">
                  <span className="font-semibold text-[#474747]">Email : </span>
                  {email}
                </p>
              </div>
              <div className="flex gap-2">
                <img className="self-center" src="../assets/icons/Location.png" alt="Icon of location" />
                <p className="text-xl font-medium text-body">
                  <span className="font-semibold text-[#474747]">Address : </span>
                  {address}
                </p>
              </div>
            </div>
          </div>
          <button onClick={handleApply} className="btn theme-bg text-white w-full">
            Apply now
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default JobDetails;
