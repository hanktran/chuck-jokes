import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Joke } from "../models/Joke";

import classes from "./JokeItem.module.css";

interface Props {
  joke: Joke;
}

const JokeItem: React.FC<Props> = ({ joke }) => {
  const navigate = useNavigate();

  return (
    <div className={classes["joke-item"]}>
      <div className={classes.top}>
        <div className={classes.title}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/orange-light.png`}
            alt={joke.value}
          />
          <div>{joke.categories?.join(",") || "Uncategorized"}</div>
        </div>
        <div className={classes.value}>{joke.value}</div>
      </div>
      <button
        className={`${classes.btn} btn-default`}
        onClick={() => navigate(`/jokes/${joke.id}`)}
      >
        See stats <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default JokeItem;
