import { useEffect, useState } from 'react';
import JobCard from '../../../Utilities/JobCard';
import SectionTitle from '../../../Utilities/SectionTitle';

const FeaturedJobs = () => {
  const [featureJobs, setFeatureJobs] = useState();
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch('data/jobs.json')
      .then((res) => res.json())
      .then((data) => setFeatureJobs(data));
  }, []);

  return (
    <section className="container mx-auto max-sm:px-5 mb-32">
      <SectionTitle
        title="Featured Jobs"
        description="Explore thousands of job opportunities with all the information you need. Its your future"></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {featureJobs?.slice(0, dataLength)?.map((job) => (
          <JobCard key={job?.id} job={job}></JobCard>
        ))}
      </div>
      <div className={`w-full flex justify-center  ${dataLength === featureJobs?.length ? 'hidden' : 'mt-10'}`}>
        <button onClick={() => setDataLength(featureJobs.length)} className={`btn theme-bg text-white `}>
          View Details
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
