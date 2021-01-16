import { GetStaticProps } from "next";

import { getReviews, Review } from "../../utils/reviews";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import ReviewGrid from "../../components/ReviewGrid";

interface Props {
  reviews: Review[];
}

const ReviewsPage: React.FC<Props> = ({ reviews }) => {
  return (
    <Layout
      title="Arvostelut"
      description="Arkisto kaikist Iskender.fi -arvosteluista"
    >
      <section className="flex flex-col space-y-8">
        <Heading level={1}>Iskender-arvostelut</Heading>
        <ReviewGrid reviews={reviews} />
      </section>
    </Layout>
  );
};

export default ReviewsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const reviews = await getReviews();

  return {
    props: {
      reviews,
    },
  };
};
