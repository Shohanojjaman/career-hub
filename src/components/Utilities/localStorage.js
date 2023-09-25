const getStoredJonApplication = () => {
  const storedJobApplication = localStorage.getItem('job-application');
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {

  const storedJobApplications = getStoredJonApplication();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
  }
};

export { getStoredJonApplication, saveJobApplication };
