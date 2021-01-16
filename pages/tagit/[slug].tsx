import { GetStaticProps, GetStaticPaths } from "next";

import { getReviewsByTag, Review } from "../../utils/reviews";
import { getTagPaths, getTags, Tag } from "../../utils/tags";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import ReviewGrid from "../../components/ReviewGrid";

interface Props {
  reviews: Review[];
  tag: Tag;
}

const TagPage: React.FC<Props> = ({ reviews, tag }) => {
  return (
    <Layout
      title={`Arvostelut tagilla ${tag.name}`}
      description={`Kaikki tagilla ${tag.name} merkityt Iskender.fi arvostelut`}
    >
      <section className="flex flex-col space-y-16">
        <Heading level={1}>Arvostelut tagilla {tag.name}</Heading>
        <ReviewGrid reviews={reviews} />
      </section>
    </Layout>
  );
};

export default TagPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (typeof params.slug !== "string") {
    throw new Error("params.slug needs to be a string");
  }

  const tags = await getTags();
  const tag = tags.find((tag) => tag.slug === params.slug);

  const reviews = await getReviewsByTag(tag);

  return {
    props: {
      reviews,
      tag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTagPaths();

  return {
    paths,
    fallback: false,
  };
};
