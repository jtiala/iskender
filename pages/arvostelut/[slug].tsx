import { GetStaticProps, GetStaticPaths } from "next";

import { getReviewBySlug, getReviewPaths, Review } from "../../utils/reviews";

import Layout from "../../components/Layout";
import ReviewArticle from "../../components/ReviewArticle";

interface Props {
  review: Review;
}

const ReviewPage: React.FC<Props> = ({ review }) => {
  return (
    <Layout
      title={review.title}
      description={`Iskender.fi -arvostelu: ${review.title}`}
      ogImage={review.coverImage}
    >
      <ReviewArticle review={review} />
    </Layout>
  );
};

export default ReviewPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (typeof params.slug !== "string") {
    throw new Error("params.slug needs to be a string");
  }

  const review = await getReviewBySlug(params.slug);

  return {
    props: {
      review,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getReviewPaths();

  return {
    paths,
    fallback: false,
  };
};
