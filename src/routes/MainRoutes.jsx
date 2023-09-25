import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AppliedJobs from '../components/pages/AppliedJobs/AppliedJobs';
import Blog from '../components/pages/Blog/Blog';
import JobDetails from '../components/pages/JobDetails/JobDetails';
import Statistics from '../components/pages/Statistics/Statistics';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Statistics></Statistics>,
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('./data/jobs.json'),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('./data/jobs.json'),
      },
    ],
  },
]);

export default MainRoutes;
