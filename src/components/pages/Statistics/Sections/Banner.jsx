import Header from '../../../Utilities/Header/Header';

const Banner = () => {
  return (
    <div className="bg-[#F9F9FF]  ">
      <Header></Header>

      <div className="container mx-auto max-sm:px-5 flex max-lg:flex-col pt-8 items-center">
        <div className="lg:w-1/2 mb-16 lg:mr-16">
          <h1 className="text-5xl xl:text-[5rem] leading-tight font-extrabold">
            One Step Closer To Your <span className="theme-text max-lg:block">Dream Job</span>
          </h1>
          <p className="text-lg text-body font-medium mt-6">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it.
            Manage all your job application from start to finish.
          </p>
          <button className="btn theme-bg text-white mt-8">Get Started</button>
        </div>
        <div className="lg:w-1/2 flex items-end">
          <img className="w-full self-end" src="./assets/images/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
