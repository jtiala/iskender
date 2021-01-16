import { GetStaticProps } from "next";

import { getTags, Tag } from "../../utils/tags";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import TagList from "../../components/TagList";

interface Props {
  tags: Tag[];
}

const TagsPage: React.FC<Props> = ({ tags }) => {
  return (
    <Layout title="Tagit" description="Kaikki Iskender.fi -arvostelujen tagit">
      <section className="flex flex-col space-y-8 xl:w-2/3">
        <Heading level={1}>Tagit</Heading>
        <TagList tags={tags} />
      </section>
    </Layout>
  );
};

export default TagsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tags = await getTags();

  return {
    props: {
      tags,
    },
  };
};
