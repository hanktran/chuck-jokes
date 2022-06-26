import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import useFetch from "../hooks/useFetch";
import { getCategories } from "../utils";

import { useNavigate } from "react-router-dom";

import JokesContext from "../store/jokes-context";
import classes from "./Banner.module.css";

interface Props {}

const Banner: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [showError, setShowError] = useState(false);

  const { setSelectedCategory } = useContext(JokesContext);

  const { loading, data, fetchData } = useFetch();

  const onSearchHandler = () => {
    setShowError(false);
    if (searchValue.trim().length < 3) {
      setShowError(true);
    } else if (!loading) {
      fetchData(searchValue);
    }
  };

  useEffect(() => {
    if (data) {
      if (data.length === 1) {
        navigate(`/jokes/${data[0].id}`);
      } else {
        const { formattedJokes } = getCategories(data);
        setSelectedCategory(formattedJokes);
      }
    }
  }, [data]);

  return (
    <section className={classes.banner}>
      <img
        className={classes.image}
        src={`${process.env.PUBLIC_URL}/assets/bitmap.png`}
        alt="#"
      />
      <div className={`container ${classes.container}`}>
        <div className={classes.content}>
          <h1 className={classes.title}>The Joke Bible</h1>
          <h3 className={classes.subtitle}>Daily Laughs for your and yours</h3>
          <div className={classes["search-bar"]}>
            <input
              className={classes["search-input"]}
              placeholder="How can we make you laugh today?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span className={classes["btn-search"]}>
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                onClick={onSearchHandler}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
