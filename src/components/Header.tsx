import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";

interface Props {}

const Header: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(false);

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <header className={classes.navbar}>
      <div
        className={`${classes["navigation-menu"]} ${
          showNavbar ? classes.expanded : ""
        }`}
      >
        <div onClick={gotoHome} className={classes["navbar-item"]}>
          SO FUNKTIONIERT'S
        </div>
        <div onClick={gotoHome} className={classes["navbar-item"]}>
          SONDERANGEBORE
        </div>
        <div className={`${classes["navbar-item"]} ${classes["main-area"]}`}>
          <FontAwesomeIcon icon={faUser} />
          <span>MEIN BEREICH</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <div
        className={`${classes["navbar-item"]} ${classes.icon}`}
        onClick={() => setShowNavbar((p) => !p)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
    </header>
  );
};

export default Header;
