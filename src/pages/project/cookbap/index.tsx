import MoveImages from "../card/move_images";
import styles from "./index.module.css";

export default function CookBap() {
  const pictures: { image: string; name: string }[] = [
    { image: "https://ifh.cc/g/GVPJAD.jpg", name: "이름임" },
    { image: "https://ifh.cc/g/j2GSv4.jpg", name: "이름2임" },
    { image: "https://ifh.cc/g/j2GSv4.jpg", name: "이름3임" },
    { image: "https://ifh.cc/g/j2GSv4.jpg", name: "이름4임" },
    { image: "https://ifh.cc/g/j2GSv4.jpg", name: "이름5임" },
  ];

  return (
    <div className={styles.projectContainer}>
      <div className={styles.introProduction}>
        <div>Cookbap</div>
        <div>2024.05.02~05.31</div>
        <div>메인 프로젝트 / 인원 7명</div>
        <div>Front 4명 , Back 3명</div>
        <div>자취생을 위한 요리 레시피 커뮤니티</div>
      </div>
      <div>
        <div className={styles.imageWrapper}>
          {/* <img
            className={styles.images}
            src="https://ifh.cc/g/j2GSv4.jpg"
            alt=""
          /> */}
          <MoveImages pictures={pictures} count={5} />
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>초기 환경 세팅</div>
          <ul>
            <li>Yarn,React,TypeScript로 프로젝트 생성</li>
            <li>깃허브 레포 생성 및 권한 부여</li>
            <li>
              코드 규칙,파일 및 함수 네이밍 규칙 지정, eslint ,prettier 설정
            </li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>Project Build</div>
          <ul>
            <li>netilfy를 이용해 프로젝트 빌드</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>일반 로그인</div>
          <ul>
            <li>JWT 토큰을 사용하여 로컬스토리지에 토큰,id,nickname 저장</li>
            <li>
              유저정보를 contextAPI로 전역으로 관리하는 state ⇒ userInfo에 담음
            </li>
            <li>
              location pathname을 이용해 전에 왔던 페이지로 보내고 외부에서
              login페이지 접근 시 홈으로 이동
            </li>
            <li>로그인 실패 시 “유효하지 않은 계정”이라는 alert를 띄움</li>
            <li>비밀번호를 password,text형태로 숨기기/보기 구현</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>카카오 로그인</div>
          <ul>
            <li>
              로그인을 할 때마다,카카오 로그인창을 띄워달란 백엔드 요청에
              따랐더니 location pathname가 안됨.{" "}
              <div>
                이유는 전에 왔던 페이지가 카카오 로그인창이기 때문. 따라서
                session에 저장,로그인이 성공 시 3분 후에 삭제하도록 작동 시킴.
              </div>
            </li>
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
          <div className={styles.explainSubject}>게시글의 댓글 CRUD</div>
          <ul>
            <li>내 id와 댓글의 id가 같다면, 수정 및 삭제 버튼을 보여줌</li>
            <li>
              수정 버튼을 눌렀을 때, 버튼 수정 ,삭제 ⇒ 수정 완료 ,취소 버튼으로
              바뀜
            </li>
            <li>
              Create : 서버요청에 성공 시 댓글 state 배열에 보낸 댓글을 추가
              ,유저는 흰 화면을 안봐도 되게 구현
            </li>
            <li>
              Update : 서버 요청 성공시 state에 id와 보내는 id가 같다면
              state값을 변경
            </li>
            <li>
              Delete: 댓글을 삭제하겠냐고 물어보고, 확인을 누르면 삭제기능 구현
            </li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>채팅</div>
          <ul>
            <li>채팅 리스트 받아오기(API 엔드포인트)</li>
            <li>채팅방 생성(API 엔드포인트)</li>
            <li>
              전역상태로 선택한 채팅방을 관리함. (채팅방을 선택 했을 때만 웹소켓
              코드가 동작하도록 설정)
            </li>
            <li>
              채팅방을 클릭했을 때 채팅방 연결(빨강색),연결종료(검은색) 토글
            </li>
            <li>
              <div>
                채팅 메세지를 보낼 때 같은 메세지가 2개 보이는 오류로 인해
              </div>
              <div>
                ”생성된 시간이 똑같다면 한 개의 채팅만 저장해라” 라는 코드를
                if문을 이용해 작성
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>
            네브바(검색 기능,을 제외한 나머지 기능구현)
          </div>
          <ul>
            <li>로그아웃 기능구현</li>
            <li>router를 통한 페이지 이동</li>
            <li>유저 닉네임이 보이도록 기능구현</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>게시글 상세페이지</div>
          <ul>
            <li>
              썸네일,작성자 프로필,이름,작성시간(한국시간),카테고리 , 찜
              갯수,댓글 수 API 요청 받아 보여주기
            </li>
            <li>찜하기 기능구현(찜하기 , 찜하기 취소)</li>
            <li>채팅하기 버튼 (채팅방 생성 후 채팅 페이지로 이동)</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>
            Axios 설정,로딩 및 에러처리
          </div>
          <ul>
            <li>axios instance(baseURL) 설정</li>
            <li>axios 요청 인터셉터를 통해 loading 구현</li>
            <li>에러 케이스별로 분류 해 알람(400,402,403,알수없는 에러 등)</li>
            <li>401일 때 refresh⇒ access토큰 갱신 요청</li>
            <li>실패 : logout</li>
          </ul>
        </div>
        <div className={styles.explainWrapper}>
          <div className={styles.explainSubject}>프로젝트 상세기술</div>
          <ul>
            <li>Client :React TypeScript SocketIo Axios</li>
            <li>publishing : CSS-Module Styled-components</li>
            <li>server : AMAZON EC2</li>
          </ul>
        </div>
        <div className={styles.linkWrapper}>
          <a href="https://cookbap.netlify.app/">배포주소 가기</a>
          <a href="https://dailycoding777.tistory.com/22">프로젝트 회고</a>
        </div>
      </div>
    </div>
  );
}
