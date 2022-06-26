import { memo, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Categories.module.css";

interface Props {
  categories: string[];
  onSelect: (category: string) => void;
}

const Categories: React.FC<Props> = ({ categories, onSelect }) => {
  const [showCategories, setShowCategories] = useState<string[]>([]);
  const [showViewMore, setShowViewMore] = useState(true);

  const showMoreHandler = () => {
    setShowViewMore(false);
    setShowCategories(categories.slice(0));
  };

  useEffect(() => {
    if (categories.length) {
      setShowCategories(categories.slice(0, 7));
    }
  }, [categories]);

  return (
    <section>
      <div className="container">
        <div className={classes.categories}>
          {showCategories.map((c: string) => (
            <button
              className="btn primary-outline"
              key={c}
              onClick={() => onSelect(c)}
            >
              {c.toUpperCase()}
            </button>
          ))}
          {showViewMore && categories.length > 7 && (
            <button className="btn btn-default" onClick={showMoreHandler}>
              VIEW ALL <FontAwesomeIcon icon={faArrowDown} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Categories);
