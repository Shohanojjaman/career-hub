import { Outlet } from 'react-router-dom';
import Header from '../Utilities/Header/Header';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Layout;
