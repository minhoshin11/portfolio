import CookBap from "./cookbap";
import styles from "./index.module.css";

export default function Project() {
  // const [modalOpen, setModalOpen] = useState(false);
  // const modalBackground = useRef();
  //ref는 바깥컨텐츠를 클릭했을 때도, 사라지도록 하는 것
  //https://velog.io/@bami/React-React%EC%97%90%EC%84%9C-%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  // const navigate = useNavigate();
  return (
    <div>
      <div className={styles.projectContainer}>
        {/* <div>
          <button onClick={() => setModalOpen(true)}>모달 열기</button>
        </div>
        {modalOpen && <div></div>} */}
      </div>
      <CookBap />
    </div>
  );
}
