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
                <div>tlsalsgh777@naver.com</div>
              </li>
              <li className={styles.aboutLi}>
                <div>학력</div>
                <div>단양고등학교</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.skillColor}>
          <div
            style={{ fontFamily: "Medium", color: "black", fontSize: "20px" }}
          >
            Skills
          </div>
          <div className={styles.skillContainer}>
            <div className={styles.Tools}>
              <div className={styles.whiteToolBox}>
                <div className={styles.skillName}>FrontEnd</div>
                <div>
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      className={styles.stackImgEightSize}
                    />
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      className={styles.stackImgEightSize}
                    />
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      className={styles.stackImgEightSize}
                    />
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                      alt="typescript"
                      className={styles.stackImgEightSize}
                    />
                  </div>
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="react"
                      className={styles.stackImgEightSize}
                    />{" "}
                    <img
                      src="https://www.vectorlogo.zone/logos/reactrouter/reactrouter-ar21.svg"
                      alt="reactRouter"
                      className={styles.stackImgEightSize}
                    />
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                      alt="nextjs"
                      className={styles.stackImgEightSize}
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"
                      alt="bootstrap"
                      className={styles.stackImgEightSize}
                    />
                  </div>
                  {/* <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="70"
                    height="70"
                  /> */}
                </div>
              </div>
            </div>
            <div className={styles.Tools}>
              <div className={styles.whiteToolBox}>
                <div className={styles.skillName}>Collaboration Tools</div>
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  className={styles.stackImgSevenSize}
                />
                <img
                  src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
                  alt="github"
                  className={styles.stackImgSevenSize}
                />
                <img
                  src="https://www.vectorlogo.zone/logos/discord/discord-tile.svg"
                  alt="discord"
                  className={styles.stackImgSevenSize}
                />

                <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  className={styles.stackImgSevenSize}
                />
              </div>
            </div>
            <div className={styles.Tools}>
              <div className={styles.whiteToolBox}>
                <div className={styles.skillName}>Deployment</div>
                <img
                  src="https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg"
                  alt="github"
                  width="160"
                  height="70"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg"
                  alt="github"
                  width="160"
                  height="70"
                />
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
