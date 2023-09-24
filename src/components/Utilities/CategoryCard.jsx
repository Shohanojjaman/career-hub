import PropTypes from 'prop-types';

const CategoryCard = ({ job }) => {
  console.log(typeof job);
  const { logo, category_name, availability } = job;
  return (
    <div className="p-10 light-theme-bg rounded-lg space-y-8 w-72">
      <div className="rounded-lg bg-gradient-to-l from-[#7e90fe0d] to-[#9873ff0d] p-4 inline-block">
        <img className="opacity-100 z-10" src={logo} alt="" />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-extrabold text-heading">{category_name}</h4>
        <p className="text-[#a3a3a3] font-medium">{availability}</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default CategoryCard;
