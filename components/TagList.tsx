import { Tag } from "../utils/tags";

import Link from "./Link";

interface Props {
  tags: Tag[];
}

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tags.map(({ slug, name, count }) => (
        <li
          key={slug}
          className="flex flex-col space-y-1 p-4 bg-white shadow focus-within:shadow-lg hover:shadow-lg border-l-4 border-red-800"
        >
          <h3 className="leading-none font-sans font-bold text-black text-2xl">
            <Link variant="secondary" href={`/tagit/${slug}`}>
              {name}
            </Link>
          </h3>
          <small>
            {count} {count === 1 ? "arvostelu" : "arvostelua"}
          </small>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
