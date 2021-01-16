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
  review: { slug, title, date, tags, coverImage },
}) => {
  return (
    <article className="flex flex-col space-y-6 pb-6 bg-white shadow focus-within:shadow-lg hover:shadow-lg">
      <div className="relative aspect-w-16 aspect-h-9 border-b-10 border-red-800">
        <NextLink href={`/arvostelut/${slug}`}>
          <a
            aria-label={title}
            className=" outline-none focus:ring focus:ring-offset-2 focus:ring-red-800"
          >
            <Image src={coverImage} layout="fill" className="object-cover" />
          </a>
        </NextLink>
      </div>
      <h3 className="leading-none font-sans font-bold text-black text-2xl text-center">
        <Link variant="secondary" href={`/arvostelut/${slug}`}>
          {title}
        </Link>
      </h3>
      <div className="flex items-center justify-center flex-col xs:flex-row space-y-1 xs:space-y-0 xs:space-x-4">
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
    </article>
  );
};

export default ReviewPreview;
