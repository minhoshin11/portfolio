import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.navContainer}>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.homeLink}
        >
          Minho Shin
        </div>
        <div className={styles.linkBox}>
          <div
            onClick={() => {
              navigate("/project");
            }}
            className={styles.link}
          >
            Project
          </div>
          <div
            onClick={() => {
              navigate("/about");
            }}
            className={styles.link}
          >
            About
          </div>
        </div>
      </div>
    </div>
  );
}
