import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.line1}>방문해주셔서 감사합니다.</div>
        <div className={styles.line2}>
          저는 신입 프론트엔드 개발자{" "}
          <span className={styles.name}>신민호</span>입니다.
        </div>
        <div className={styles.contentExplain}>
          <div className={styles.line3}> Project는 제가 구현한 상세 내용</div>
          <div className={styles.line4}>
            About엔 저에 대한 정보가 담겨있습니다.
          </div>
        </div>
        <div className={styles.buttonBox}>
          <div
            onClick={() => {
              navigate("/project");
            }}
            className={styles.buttons}
          >
            ProJect
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
  );
}
