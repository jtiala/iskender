import ReactMarkdown from "react-markdown";
import unwrapImages from "remark-unwrap-images";

import Image from "./Image";

interface Props {
  content: string;
}

const renderers = {
  image: (image) => {
    const defaultSize = [4, 3]; // Aspect ratio of a default landscape photo

    const [width, height] =
      typeof image.title === "string" && /^\d*x\d*$/.test(image.title)
        ? image.title.split("x").map((n) => parseInt(n))
        : defaultSize;

    return (
      <Image src={image.src} alt={image.alt} width={width} height={height} />
    );
  },
};

const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown
      className="prose md:prose-xl max-w-none md:max-w-prose"
      children={content}
      renderers={renderers}
      plugins={[unwrapImages]}
    />
  );
};

export default Markdown;
