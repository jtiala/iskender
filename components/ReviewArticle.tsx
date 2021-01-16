import { Review } from "../utils/reviews";

import Date from "./Date";
import Heading from "./Heading";
import Markdown from "./Markdown";
import Link from "./Link";
import ScoreTable from "./ScoreTable";
import Icon from "./Icon";

interface Props {
  review: Review;
}

const ReviewArticle: React.FC<Props> = ({
  review: { title, date, tags, score, content },
}) => {
  return (
    <article className="flex flex-col space-y-16">
      <div className="flex flex-col space-y-3">
        <Heading level={1}>{title}</Heading>
        <div className="flex flex-col xs:flex-row xs:flex-wrap xs:space-x-4">
          <div className="flex items-center font-sans font-semibold text-sm text-gray-600 space-x-2">
            <Icon type="calendar" />
            <p className="sr-only">Julkaisupäivämäärä</p>
            <Date date={date} />
          </div>
          <div className="flex items-center font-sans font-semibold text-sm text-gray-600 space-x-2">
            <Icon type="tag" />
            <p className="sr-only">Tagit</p>
            <ul className="list-none space-x-2 flex flex-row">
              {tags.map(({ slug, name }) => (
                <li key={slug}>
                  <Link variant="tertiary" href={`/tagit/${slug}`}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Markdown content={content} />
      <ScoreTable score={score} />
    </article>
  );
};

export default ReviewArticle;
