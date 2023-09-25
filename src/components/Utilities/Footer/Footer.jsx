import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-heading text-light-white">
      <div className="footer gap-x-0 flex flex-wrap justify-between container mx-auto max-sm:px-5 pb-10 pt-32 border-b border-light-white">
        <aside className="w-72 px-4 space-y-5">
          <h1>
            <Link to={'/'} className="text-2xl md:text-4xl text-white font-extrabold">
              CareerHub
            </Link>
          </h1>
          <p className="text-medium-white">
            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some
            form.
          </p>
          <div className="flex gap-4">
            <Link>
              <FaFacebookF className="text-[#337FFF] bg-white w-8 text-lg h-8 p-2 rounded-full"></FaFacebookF>
            </Link>
            <Link>
              <FaTwitter className="text-[#00cbfb] bg-white w-8 text-lg h-8 p-2 rounded-full"></FaTwitter>
            </Link>
            <Link>
              <img src="./assets/icons/instagram.png" className="w-8 h-8" alt="Icon of instagram" />
            </Link>
          </div>
        </aside>
        <nav className="w-28 px-4 text-medium-white">
          <header className="footer-title text-xl text-white opacity-100">Services</header>
          <Link className="link link-hover text-base">About Us</Link>
          <Link className="link link-hover text-base">Work</Link>
          <Link className="link link-hover text-base">Latest News</Link>
          <Link className="link link-hover text-base">Careers</Link>
        </nav>
        <nav className="w-42 px-4 text-medium-white">
          <header className="footer-title text-xl text-white opacity-100">Product</header>
          <Link className="link link-hover text-base">Prototype</Link>
          <Link className="link link-hover text-base">Plans & Pricing</Link>
          <Link className="link link-hover text-base">Customers</Link>
          <Link className="link link-hover text-base">Integrations</Link>
        </nav>
        <nav className="w-28 px-4 text-medium-white">
          <header className="footer-title text-xl text-white opacity-100">Support</header>
          <Link className="link link-hover text-base">Help Desk </Link>
          <Link className="link link-hover text-base">Sales</Link>
          <Link className="link link-hover text-base">Become a Partner</Link>
          <Link className="link link-hover text-base">Developers</Link>
        </nav>
        <nav className="w-42 px-4 text-medium-white">
          <header className="footer-title text-xl text-white opacity-100">Contact</header>
          <p className="text-base">524 Broadway, NYC</p>
          <p className="text-base"> +1 777 - 978 - 5570 </p>
        </nav>
      </div>
      <div className="footer container mx-auto max-sm:px-5 pt-12 pb-32">
        <aside className="flex flex-wrap justify-center sm:justify-between w-full">
          <p className="text-sm">Copyright © 2023 - All right reserved by CareerHub</p>
          <p>
            Powered by{' '}
            <Link>
              <b>CareerHub</b>
            </Link>
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
