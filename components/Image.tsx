import NextImage, { ImageProps } from "next/image";
import Link from "next/link";

const Image: React.FC<ImageProps> = ({ alt, ...props }) => {
  if (typeof props.src !== "string") {
    return null;
  }

  return (
    <figure className="flex flex-col space-y-2">
      <Link href={props.src}>
        <a
          aria-label="Avaa täysikokoinen kuva"
          target="_blank"
          rel="noreferrer noopener"
          className="outline-none focus:ring focus:ring-offset-2 focus:ring-red-800"
        >
          <NextImage alt="" {...props} />
        </a>
      </Link>
      {typeof alt === "string" && alt.length > 0 && (
        <figcaption>{alt}</figcaption>
      )}
    </figure>
  );
};

export default Image;
