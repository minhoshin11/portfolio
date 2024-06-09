import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import About from "./pages/about";
import Main from "./pages/main";
import Project from "./pages/project";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="*" element={<div>없는 페이지임</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
