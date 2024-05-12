import styles from "./Navbar.module.css";
import Linksnav from "../elements/Linksnav";
import Linksicon from "../elements/Linksicon";
import { NavLink } from "react-router-dom";

function Navbarex() {
  return (
    <nav className="container">
      <div className="row justify-content-around gap-5">
        <div className="col-sm-auto align-items-center">
          <Linksnav />
        </div>
        <div className={`${styles.btn} col-sm-auto`}>
          <Linksicon/>
        </div>
      </div>
    </nav>
  );
}

export default Navbarex;
