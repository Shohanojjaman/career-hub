import PropTypes from 'prop-types';
const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-5xl text-heading font-extrabold">{title}</h2>
      <p className='text-bas text-body font-medium'>{description}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionTitle;
