import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import About from "./pages/about/about";
import Main from "./pages/main/main";
import Project from "./pages/project";
import CookBap from "./pages/project/cookbap";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/cookbap" element={<CookBap />}></Route>
        <Route path="*" element={<div>없는 페이지임</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
