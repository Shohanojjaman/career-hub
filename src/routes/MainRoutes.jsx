import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AppliedJobs from '../components/pages/AppliedJobs/AppliedJobs';
import Statistics from '../components/pages/Statistics/Statistics';
import Blog from '../components/pages/Blog/Blog';

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
      },
      {
        path    :'/blog',
        element:<Blog></Blog>
      }
    ],
  },
]);

export default MainRoutes;
