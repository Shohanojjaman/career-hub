import PropTypes from 'prop-types';

const CategoryCard = ({ imagePath, title, description }) => {
  return (
    <div className="p-10 light-theme-bg rounded-lg space-y-8 w-72">
      <div className="rounded-lg bg-gradient-to-l from-[#7e90fe0d] to-[#9873ff0d] p-4 inline-block">
        <img className="opacity-100 z-10" src={imagePath} alt="" />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-extrabold text-heading">{title}</h4>
        <p className="text-[#a3a3a3] font-medium">{description}</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryCard;
