import { createElement, HTMLAttributes } from "react";
import classNames from "classnames";

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  level: Level;
}

const Heading: React.FC<Props> = ({ level, children }) => {
  const className = classNames("leading-none text-black font-sans", {
    "text-6xl font-black self-start border-red-800 border-b-10": level === 1,
    "text-5xl font-extrabold": level === 2,
    "text-4xl font-bold": level === 3,
    "text-3xl font-semibold": level === 4,
    "text-2xl font-semibold": level === 5,
    "text-lg font-semibold": level === 6,
  });

  return createElement(`h${level}`, { className }, children);
};

export default Heading;
