import PropTypes from 'prop-types';
import Header from './Header/Header';

const PageBanner = ({ title }) => {
  return (
<section className="banner-bg light-theme-bg h-96">
      <Header></Header>
      <div className="h-4/5 flex justify-center items-center">
        <h1 className="text-4xl font-extrabold text-heading">{title}</h1>
      </div>
    </section>
  );
};

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageBanner;
