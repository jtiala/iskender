import Image from "next/image";
import NextLink from "next/link";
import { Review } from "../utils/reviews";

import Date from "./Date";
import Link from "./Link";
import Icon from "./Icon";

interface Props {
  review: Review;
}

const ReviewPreview: React.FC<Props> = ({
  review: { slug, title, date, tags, coverImage, score },
}) => {
  return (
    <article className="flex flex-col space-y-6 pb-6 bg-white shadow focus-within:shadow-lg hover:shadow-lg">
      <div className="relative aspect-w-16 aspect-h-9 border-b-10 border-red-800">
        <NextLink href={`/arvostelut/${slug}`}>
          <a
            aria-label={title}
            className="outline-none focus:ring focus:ring-offset-2 focus:ring-red-800"
          >
            <Image
              src={coverImage}
              layout="fill"
              className="object-cover"
              alt=""
            />
          </a>
        </NextLink>
      </div>
      <div className="flex flex-col xs:flex-row space-x-0 xs:space-x-6 space-y-6 xs:space-y-0 mx-6">
        <div className="flex flex-col flex-grow space-y-2">
          <h3 className="leading-none font-sans font-bold text-black text-2xl text-center xs:text-left">
            <Link variant="secondary" href={`/arvostelut/${slug}`}>
              {title}
            </Link>
          </h3>
          <div className="flex flex-col xs:flex-row items-center justify-center xs:justify-start space-y-1 xs:space-y-0 space-x-0 xs:space-x-4">
            <div className="flex items-center font-sans font-semibold text-sm text-gray-600 space-x-2">
              <Icon type="calendar" alt="Julkaisupäivämäärä" />
              <Date date={date} />
            </div>
            <div className="flex items-center font-sans font-semibold text-sm text-gray-600 space-x-2">
              <Icon type="tag" alt="Tagit" />
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
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-baseline font-bold text-red-800 text-4xl font-sans">
            {score.total}
            <span className="text-gray-500 text-2xl">/20</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewPreview;
