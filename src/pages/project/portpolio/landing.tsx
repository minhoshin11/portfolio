import MoveImages from "../card/move_images";
import styles from "./index.module.css";

export default function Landing() {
  const pictures: { image: string; name: string }[] = [
    { image: "https://ifh.cc/g/GVPJAD.jpg", name: "메인페이지" },
    { image: "https://ifh.cc/g/yFmfGy.png", name: "유저 플로우" },
    { image: "https://ifh.cc/g/WXkPcX.jpg ", name: "카테고리" },
    { image: "https://ifh.cc/g/HGOc5A.jpg", name: "클럽 홈" },
    { image: "https://ifh.cc/g/hlxSWP.jpg", name: "로그인" },
    { image: "https://ifh.cc/g/gpZXTA.jpg", name: "모임개설" },
  ];

  return (
    <div className={styles.projectContainer}>
      <div className={styles.introProduction}>
        <div style={{ fontSize: "2rem", color: "aqua" }}>Landing</div>
        <div>한국인,한국에 사는 외국인의 커뮤니티</div>
        <div>2024.03.26 - 2024.04.30</div>
        <div>메인 프로젝트 / 인원 7명</div>
        <div>기획 1명,Front 3명 , Back 3명</div>
      </div>

      <div>
        <div className={styles.imageWrapper}>
          <MoveImages pictures={pictures} count={5} />
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>초기 환경 세팅</div>
          <ul>
            <li>Yarn,React,TypeScript로 프로젝트 생성</li>
            <li>eslint ,prettier 설정</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>메인 페이지</div>
          <ul>
            <li>최신 모임 6개를 보여줌</li>
            <li>카테고리 아이콘 기능구현(hover:색상변화, click: 이동)</li>
            <li>모임 이미지 케러셀 구현</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>로그인</div>
          <ul>
            <li>JWT 토큰을 사용하여 로컬스토리지에 토큰,id,nickname 저장</li>
            <li>userInfo를 전역으로 값을 저장해 nav바에도 연동되게 설정</li>
          </ul>
        </div>

        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>로그아웃</div>
          <ul>
            <li>
              서버에 로그아웃했다는 요청 , 로컬스토리지에 있던 것들을 remove하고
              alert창을 사용자에게 띄워 줌.
            </li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>카테고리 별 모임 목록</div>
          <ul>
            <li>카테고리를 선택하면 보이는 페이지</li>
            <li>페이지네이션 구현 </li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>모임 생성</div>
          <ul>
            <li>호버 시 크기변화</li>
            <li>카테고리는 1개 선택,연령은 중복선택 기능구현</li>
            <li>
              모임명,장소,모임소개,대표사진(선택사항) 선택 후 formData로 서버에
              제출
            </li>
            <li>요소 미선택 시 alert(’전부 입력해주세요’)</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>게시글 등록</div>
          <ul>
            <li>유저 프로필 사진 , 이미지 띄워줌</li>
            <li>제목 , 글 , 사진(선택)으로 formData 서버에 제출</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>일정 등록</div>
          <ul>
            <li>일정제목 , 날짜(한국시간 기준), 장소, 인원, 내용 등록</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>게시글 상세페이지 보기</div>
          <ul>
            <li>
              모임이 가입되어있는지 확인해야 하기에 access토큰과 함께 서버에
              요청
            </li>
            <li>
              뒤로가기 버튼(url에서 모임의 id값을 사용해 모임 페이지로 이동)
            </li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>프로젝트 상세기술</div>
          <ul>
            <div>Client</div>
            <li className={styles.stackImgWrapper}>
              <img
                width={"140px"}
                height={"35px"}
                src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"
                alt=""
              />
              <img
                width={"140px"}
                height={"35px"}
                src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                alt=""
              />
              <img
                width={"140px"}
                height={"35px"}
                src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black"
                alt=""
              />
            </li>
            <div>Publishing</div>
            <li className={styles.stackImgWrapper}>
              <img
                width={"140px"}
                height={"35px"}
                src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css&logoColor=black"
                alt=""
              />
              <img
                width={"140px"}
                height={"35px"}
                src="https://img.shields.io/badge/styledcomponents-DB7893?style=for-the-badge&logo=styledcomponents&logoColor=black"
                alt=""
              />
            </li>
            <div>Server</div>
            <li className={styles.stackImgWrapper}>
              <img
                width={"140px"}
                height={"35px"}
                src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=black"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className={styles.linkWrapper}>
          <a
            href="http://oz-landing-kr.s3-website.kr.object.ncloudstorage.com/"
            target="_blank"
          >
            배포주소 가기
          </a>
          <a href="https://dailycoding777.tistory.com/21" target="_blank">
            프로젝트 회고
          </a>
        </div>
      </div>
    </div>
  );
}
