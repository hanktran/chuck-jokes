import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { Joke } from "../models/Joke";
import JokeItem from "./JokeItem";

import classes from "./Jokes.module.css";

interface Props {
  showViewMore: boolean;
  displayJokes: Joke[];
  viewMore: () => void;
}

const Jokes: React.FC<Props> = ({ showViewMore, displayJokes, viewMore }) => {
  return (
    <section>
      <div className="container">
        <div className={classes.jokes}>
          {displayJokes.map((joke: Joke) => (
            <JokeItem key={joke.id} joke={joke} />
          ))}
        </div>
      </div>
      {showViewMore && (
        <div className="bottom-btn">
          <button className="btn primary-outline" onClick={viewMore}>
            view more <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      )}
    </section>
  );
};

export default memo(Jokes);
