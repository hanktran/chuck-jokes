import { Joke } from "../models/Joke";

export const getCategories = (jokes: Joke[]) => {
  const categories: string[] = [];
  const formattedJokes = jokes.map((j: Joke) => {
    let c = j?.categories;
    if (!c || c.length === 0) {
      c = ["Uncategorized"];
    }

    if (!categories.includes(c.join(","))) {
      categories.push(c.join(","));
    }

    return { ...j, categories: c };
  });

  return { categories, formattedJokes };
};
