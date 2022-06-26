import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

import { Joke } from "../models/Joke";

import classes from "./JokeDetails.module.css";
import { useEffect } from "react";

interface Props {
  joke: Joke | null;
  loading: boolean;
  fetchJoke: (query: string) => void;
}

const JokeDetails: React.FC<Props> = ({ joke, loading, fetchJoke }) => {
  useEffect(() => {
    if (joke && joke.id) {
      window.history.replaceState(null, "", `/jokes/${joke.id}`);
    }
  }, [joke]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!joke) {
    return <div className="text-center">Some things went wrong!!!</div>;
  }

  return (
    <div className={classes["main-content"]}>
      <div className={classes.info}>
        <div className={classes.tag}>
          <span className="tag green has-dot">
            {joke?.categories?.join(",") || "Uncategorized"}
          </span>
          <span className="tag has-dot trending orange-text">Trending</span>
        </div>
        <div className={classes.detail}>
          <h2 className={classes["top-title"]}>
            {joke?.categories?.join(",")}
          </h2>
          <p className={classes.ranking}>
            <span>No.1</span>
          </p>
          <div className={classes.desc}>{joke?.value}</div>
        </div>
      </div>

      <div className="rating">
        <div className="like">
          <button className="btn">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <p className="number">{joke?.like || 0}</p>
        </div>
        <div className="dislike">
          <button className="btn">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
          <p className="number">{joke?.dislike || 0}</p>
        </div>
      </div>

      <div className="navigation">
        <button
          className="btn primary-outline btn-prev"
          onClick={() => fetchJoke("random")}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          prev.joke
        </button>
        <button
          className="btn primary-outline btn-next"
          onClick={() => fetchJoke("random")}
        >
          next.joke
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default JokeDetails;
