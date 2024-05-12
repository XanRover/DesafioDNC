import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Linksicon.module.css";

function Linksicon() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center gap-2">
        <ul className={`${styles.linksicon}`}>
          <li>
            <a
              className="link"
              href="https://github.com/XanRover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Linksicon;
