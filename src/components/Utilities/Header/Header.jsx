import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'theme-text font-bold text-base hover:font-extrabold hover:bg-transparent'
              : 'font-bold text-base hover:theme-text hover:font-extrabold hover:bg-transparent'
          }
          to={'/'}>
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'theme-text font-bold text-base hover:font-extrabold hover:bg-transparent'
              : 'font-bold text-base hover:theme-text hover:font-extrabold hover:bg-transparent'
          }
          to={'/appliedJobs'}>
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'theme-text font-bold text-base hover:font-extrabold hover:bg-transparent'
              : 'font-bold text-base hover:theme-text hover:font-extrabold hover:bg-transparent'
          }
          to={'/blog'}>
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="container mx-auto max-sm:px-5 navbar bg-base-100">
      <div className="navbar-start">
        <details className="dropdown">
          <summary  className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </summary>
          <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </details>
        <a className="text-2xl md:text-4xl text-heading font-extrabold">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn theme-bg text-white">Star Applying</Link>
      </div>
    </header>
  );
};

export default Header;
