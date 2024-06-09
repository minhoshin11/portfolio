import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Nav() {
  return (
    <div>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.homeLink}>
          Minho Shin
        </Link>
        <div className={styles.linkBox}>
          <Link to="/project" className={styles.link}>
            Project
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
