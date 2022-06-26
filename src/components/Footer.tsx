import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./Footer.module.css";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <section className={classes.footer}>
      <img
        className={classes.image}
        src={`${process.env.PUBLIC_URL}/assets/bitmap_2.png`}
        alt="#"
      />
      <div className={`container ${classes.container}`}>
        <div className={classes.content}>
          <h3 className={classes.title}>
            Lorem ipsum dolor
            <br />
            sit, amet
          </h3>
          <button className="btn btn-default">
            See stats <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
