import { Link } from "react-router-dom";
import styles from "./index.module.css";
export default function About() {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutColor}>
          <div style={{ fontFamily: "Medium" }}>ABOUT ME</div>
          <div className={styles.aboutMeBox}>
            <ul className={styles.aboutList}>
              <li className={styles.aboutLi}>
                <div>이름</div>
                <div>신민호</div>
              </li>
              <li className={styles.aboutLi}>
                <div>생년월일</div>
                <div>97.06.13</div>
              </li>
              <li className={styles.aboutLi}>
                <div>주소지</div>
                <div>서울특별시 마포구</div>
              </li>
            </ul>
            <ul className={styles.aboutList}>
              <li className={styles.aboutLi}>
                <div>연락처</div>
                <div>010-2237-7592</div>
              </li>
              <li className={styles.aboutLi}>
                <div>이메일</div>
                <div style={{ fontFamily: "initial" }}>
                  tlsalsgh777@naver.com
                </div>
              </li>
              <li className={styles.aboutLi}>
                <div>학력</div>
                <div>단양고등학교</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.skillColor}>
          <div style={{ fontFamily: "Medium" }}>Skills</div>
          <div className={styles.skillContainer}>
            <div className={styles.Tools}>
              <div className={styles.whiteToolBox}>
                <div className={styles.skillName}>FrontEnd</div>
                <div>html</div>
                <div>css</div>
                <div>javaScript</div>
                <div>React</div>
                <div>typeScript</div>
              </div>
            </div>
            <div className={styles.Tools}>
              <div className={styles.whiteToolBox}>
                <div className={styles.skillName}>Collaboration Tools</div>
                <div>git</div>
                <div>GitHub</div>
                <div>Discord</div>
                <div>Figma</div>
              </div>
            </div>
            <div className={styles.Tools}>
              <div className={styles.whiteToolBox}>
                <div className={styles.skillName}>Deployment</div>
                <div>Vercel</div>
                <div>netlify</div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
        <div className={styles.archivingColor}>
          <div>ARCHIVING</div>
          <div className={styles.archivingContainer}>
            <div className={styles.archivingWhiteBox}>
              <Link
                className={styles.PageLink}
                to="https://github.com/minhoshin11"
              >
                GitHub
              </Link>
              <div>
                <div>과거 프로젝트</div>
                <div>혼자 연습했던 소스코드</div>
              </div>
            </div>
            <div className={styles.archivingWhiteBox}>
              <Link
                className={styles.PageLink}
                to="https://dailycoding777.tistory.com/"
              >
                Blog
              </Link>
              <div>
                <div>트러블 슈팅</div>
                <div>회고</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
