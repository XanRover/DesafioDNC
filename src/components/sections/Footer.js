import Linksicon from "../elements/Linksicon";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.text}>
      <div className="row container justify-content-around mx-auto">
        <div className="row gap-1">
          <div className="col-sm-3">
            <h3>Meu contato:</h3>
            <p>65 992634471</p>
          </div>
          <div className="col-sm-6">
            <h3>Email:</h3>
            <p>gabrielalmeida.350z@gmail.com</p>
          </div>
          <div className={`${styles.icon} col-sm-auto`}>
            <Linksicon />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
