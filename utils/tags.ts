import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

import { ReviewFrontMatter, reviewsDirectory } from "./reviews";

export interface Tag {
  slug: string;
  name: string;
  count: number;
}

export const getTags = async (): Promise<Tag[]> => {
  const fileNames = fs.readdirSync(reviewsDirectory);

  const allTags = fileNames.reduce((foundTags: string[], fileName) => {
    const fullPath = path.join(reviewsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    const { tags } = matterResult.data as ReviewFrontMatter;

    if (Array.isArray(tags)) {
      return [...foundTags, ...tags];
    }

    return foundTags;
  }, []);

  const uniqueTags = allTags.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return uniqueTags
    .map((tag) => ({
      name: tag,
      slug: slugify(tag, { lower: true, strict: true }),
      count: allTags.filter((t) => t === tag).length,
    }))
    .sort((a, b) => (a.count < b.count ? 1 : -1));
};

export const getTagPaths = async () => {
  const allTags = await getTags();

  return allTags.map((tag) => ({
    params: {
      slug: tag.slug,
    },
  }));
};
