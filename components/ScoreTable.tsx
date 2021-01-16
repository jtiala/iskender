import classNames from "classnames";

import { ReviewScore } from "../utils/reviews";

import Heading from "./Heading";

interface Props {
  score: ReviewScore;
}

const ScoreTable: React.FC<Props> = ({
  score: { summary, kebab, bread, sauces, sides, total },
}) => {
  const trClassName = (hasBorder?: boolean) =>
    classNames("flex flex-col-reverse pr-2", {
      "border-r": hasBorder,
    });

  const thClassName = (isLarge?: boolean) =>
    classNames("flex justify-center text-black", {
      "text-base md:text-xl font-normal": !isLarge,
      "text-xl md:text-3xl font-bold": isLarge,
    });

  const tdClassName = (isLarge?: boolean) =>
    classNames("flex justify-center items-baseline font-bold text-red-800", {
      "text-2xl md:text-4xl": !isLarge,
      "text-4xl md:text-6xl": isLarge,
    });

  const ofPointsClassName = (isLarge?: boolean) =>
    classNames("text-gray-500", {
      "text-base md:text-2xl": !isLarge,
      "text-2xl md:text-4xl": isLarge,
    });

  return (
    <section className="space-y-8">
      <Heading level={3}>Iskender.fi -arvio</Heading>
      <div className="prose prose-xl md:prose-2xl">
        <blockquote>
          <p>{summary}</p>
        </blockquote>
      </div>
      <table className="flex flex-col space-y-4 md:space-y-8 font-sans self-start w-full max-w-prose">
        <tbody className="grid grid-cols-4 gap-2">
          <tr className={trClassName(true)}>
            <th className={thClassName()}>Kebab</th>
            <td className={tdClassName()}>
              {kebab}
              <span className={ofPointsClassName()}>/5</span>
            </td>
          </tr>
          <tr className={trClassName(true)}>
            <th className={thClassName()}>Leipä</th>
            <td className={tdClassName()}>
              {kebab}
              <span className={ofPointsClassName()}>/5</span>
            </td>
          </tr>
          <tr className={trClassName(true)}>
            <th className={thClassName()}>Soossit</th>
            <td className={tdClassName()}>
              {kebab}
              <span className={ofPointsClassName()}>/5</span>
            </td>
          </tr>
          <tr className={trClassName()}>
            <th className={thClassName()}>Höysteet</th>
            <td className={tdClassName()}>
              {kebab}
              <span className={ofPointsClassName()}>/5</span>
            </td>
          </tr>
        </tbody>
        <tbody className="grid grid-cols-1 border-t pt-2 md:pt-4">
          <tr className={trClassName()}>
            <th className={thClassName(true)}>Yhteensä</th>
            <td className={tdClassName(true)}>
              {total}
              <span className={ofPointsClassName(true)}>/20</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ScoreTable;
