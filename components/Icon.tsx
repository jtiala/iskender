import classNames from "classnames";

interface Props {
  type: "tag" | "calendar";
  alt?: string;
}

/**
 * Wrapper for Heroicons
 *
 * @see https://heroicons.dev
 */
const Icon: React.FC<Props> = ({ type, alt }) => {
  const className = classNames("w-6 h-6");

  const getIcon = () => {
    switch (type) {
      case "tag":
        return (
          <path
            fillRule="evenodd"
            d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        );
      case "calendar":
        return (
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        );
    }
  };

  return (
    <span>
      {alt && <span className="sr-only">{alt}</span>}
      <svg
        className={className}
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {getIcon()}
      </svg>
    </span>
  );
};

export default Icon;
