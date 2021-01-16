import { GetStaticProps } from "next";

import { getReviews, Review } from "../utils/reviews";
import { getTags, Tag } from "../utils/tags";

import Layout from "../components/Layout";
import Heading from "../components/Heading";
import ReviewGrid from "../components/ReviewGrid";
import TagList from "../components/TagList";

interface Props {
  reviews: Review[];
  tags: Tag[];
}

const HomePage: React.FC<Props> = ({ reviews, tags }) => {
  return (
    <Layout title="Etusivu" isHomePage>
      <div className="flex flex-col space-y-16">
        <section className="bg-red-800 text-white text-xl font-serif p-8 shadow-md italic">
          Kaikkihan sen tietävät: iskender kebab on maailmankaikkeuden paras
          ruoka. Ehdottomasti. Tämän blogin kunnianhimoisena tavoitteena on
          maistaa mahdollisimman monen ravintolan iskenderiä, oppia kaikki
          mahdollinen iskender-kulttuurista ja ehkä jopa löytää Suomen paras
          iskender. Ei hemmetti iskender on oikeesti hyvää.
        </section>
        <section className="flex flex-col space-y-8">
          <Heading level={2}>Iskender-arvostelut</Heading>
          <ReviewGrid reviews={reviews} />
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section className="flex flex-col space-y-8">
            <Heading level={2}>Kirjoittaja</Heading>
            <div>
              <figure className="prose prose-xl md:prose-2xl -mt-9">
                <blockquote>
                  <p>
                    Olen oululainen ohjelmistokehittäjä ja suuri ruoan ystävä.
                    Etenkin iskender maistuu, sillä iskender on erityisen hyvää
                    ruokaa.
                  </p>
                </blockquote>
                <figcaption className="text-xl ml-4 -mt-6">
                  —Joonas, <cite>Iskender.fi</cite>
                </figcaption>
              </figure>
            </div>
          </section>
          <section className="flex flex-col space-y-8">
            <Heading level={2}>Tagit</Heading>
            <TagList tags={tags} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const reviews = await getReviews();
  const tags = await getTags();

  return {
    props: {
      reviews,
      tags,
    },
  };
};
