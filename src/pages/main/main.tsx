import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

export default function Main() {
  const navigate = useNavigate();
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonsVisible(true);
    }, 4000);
  }, [buttonsVisible]);

  return (
    <div>
      <div className={styles.mainContainer}>
        <div
          className={`${styles.text} ${styles.leftToCenter}`}
          style={{ animationDelay: "0s" }}
        >
          유저 경험을 중시하는
        </div>

        <div
          className={`${styles.text} ${styles.myName}`}
          style={{ animationDelay: "1.5s", animationDuration: "3s" }}
        >
          Front-End 신민호
        </div>
        <div className={buttonsVisible ? styles.buttonBox : styles.hidden}>
          <div>Go</div>
          <div>To</div>
          <div className={styles.buttonWrapper}>
            <div
              onClick={() => {
                navigate("/project");
              }}
              className={styles.buttons}
            >
              Project
            </div>
            <div
              onClick={() => {
                navigate("/about");
              }}
              className={styles.buttons}
            >
              About
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
