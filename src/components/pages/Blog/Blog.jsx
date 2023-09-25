import ComingSoon from '../../Utilities/ComingSoon/ComingSoon';
import PageBanner from '../../Utilities/PageBanner';

const Blog = () => {
  return (
    <section>
      <PageBanner title="Blog"></PageBanner>
      <section className="container mx-auto max-lg:px-5 my-12">
        <ComingSoon page="Blogs"></ComingSoon>
      </section>
    </section>
  );
};

export default Blog;
