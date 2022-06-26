import { useContext, useEffect, useState } from "react";

import JokesContext from "../store/jokes-context";

import Categories from "../components/Categories";
import Jokes from "../components/Jokes";

import { getCategories } from "../utils";
import { Joke } from "../models/Joke";
import useFetch from "../hooks/useFetch";

interface Props {}

const LandingPage: React.FC<Props> = () => {
  const { jokes, categories, selectedCategory, setJokes, setSelectedCategory } =
    useContext(JokesContext);

  const [showViewMore, setShowViewMore] = useState<boolean>(false);
  const [displayJokes, setDisplayJokes] = useState<Joke[]>([]);
  const [page, setPage] = useState<number>(1);

  const { loading, data, fetchData } = useFetch();

  const viewMore = () => {
    setDisplayJokes(selectedCategory?.slice(0, page * 6));
    setShowViewMore(page * 6 < selectedCategory.length);
    setPage((p) => p + 1);
  };

  const onSelectedCategory = (category: string) => {
    const selected = jokes.filter((j: Joke) =>
      j?.categories?.includes(category)
    );
    setSelectedCategory(selected);
    setPage(1);
  };

  useEffect(() => {
    fetchData("all");
  }, []);

  useEffect(() => {
    if (data) {
      const { categories, formattedJokes } = getCategories(data);
      setJokes(formattedJokes, categories);
    }
  }, [data]);

  useEffect(() => {
    if (selectedCategory.length) {
      viewMore();
    }
  }, [JSON.stringify(selectedCategory)]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Categories categories={categories} onSelect={onSelectedCategory} />
      <Jokes
        showViewMore={showViewMore}
        displayJokes={displayJokes}
        viewMore={viewMore}
      />
    </>
  );
};

export default LandingPage;
