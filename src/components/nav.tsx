import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Nav() {
  return (
    <div>
      <div className={styles.navContainer}>
        <Link to="/">Home</Link>
        <div className={styles.linkBox}>
          <Link to="/project">Project</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
