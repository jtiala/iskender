import NextImage, { ImageProps } from "next/image";

const Image: React.FC<ImageProps> = ({ alt, ...props }) => {
  return (
    <figure className="flex flex-col space-y-2">
      <NextImage alt="" {...props} />
      {typeof alt === "string" && alt.length > 0 && (
        <figcaption>{alt}</figcaption>
      )}
    </figure>
  );
};

export default Image;
