import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { getTags, Tag } from "./tags";

export interface ReviewFrontMatter {
  title: string;
  date: Date;
  tags: string[];
  coverImage: string;
  score: {
    summary: string;
    kebab: number;
    bread: number;
    sauces: number;
    sides: number;
  };
}

export interface Review {
  slug: string;
  title: string;
  date: string;
  tags: Tag[];
  coverImage: string;
  score: ReviewScore;
  content: string;
}

export interface ReviewScore {
  summary: string;
  kebab: number;
  bread: number;
  sauces: number;
  sides: number;
  total: number;
}

export const reviewsDirectory = path.join(process.cwd(), "reviews");

const parseReview = async (slug: string): Promise<Review> => {
  const fullPath = path.join(reviewsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const { title, date, tags, coverImage, score } = data as ReviewFrontMatter;
  const allTags = await getTags();

  const resolvedTags = Array.isArray(tags)
    ? tags.map((tag) => allTags.find((t) => t.name === tag))
    : [];

  const calculatedScore: ReviewScore = {
    ...score,
    total: score.kebab + score.bread + score.sauces + score.sides,
  };

  return {
    slug,
    title,
    date: date.toISOString(),
    tags: resolvedTags,
    coverImage,
    score: calculatedScore,
    content,
  };
};

export const getReviewBySlug = async (slug: string): Promise<Review> => {
  return await parseReview(slug);
};

export const getReviews = async (): Promise<Review[]> => {
  const fileNames = fs.readdirSync(reviewsDirectory);

  const allReviews = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");

      return await parseReview(slug);
    })
  );

  return allReviews.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getReviewsByTag = async (tag: Tag) => {
  return (await getReviews()).filter(
    (review) => review.tags.findIndex((t) => t.name === tag.name) !== -1
  );
};

export const getReviewPaths = () => {
  const fileNames = fs.readdirSync(reviewsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
};
