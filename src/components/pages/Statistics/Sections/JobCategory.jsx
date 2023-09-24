import { useEffect, useState } from 'react';
import CategoryCard from '../../../Utilities/CategoryCard';
import SectionTitle from '../../../Utilities/SectionTitle';

const JobCategory = () => {
  const [categoryJobs, setCategoryJobs] = useState([]);

  useEffect(() => {
    fetch('data/categories.json')
      .then((res) => res.json())
      .then((data) => setCategoryJobs(data));
  }, []);

  return (
    <div className="mt-32 mb-16 container mx-auto max-sm:px-5">
      <SectionTitle
        title="Job Category List"
        description="Explore thousands of job opportunities with all the information you need. Its your future"></SectionTitle>
      <div className="flex justify-evenly flex-wrap gap-6 mt-8">
        {categoryJobs?.map((job) => (
          <CategoryCard key={job.id} job={job}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
