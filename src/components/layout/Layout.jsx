import { Outlet } from 'react-router-dom';
import Footer from '../Utilities/Footer/Footer';
import Header from '../Utilities/Header/Header';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
