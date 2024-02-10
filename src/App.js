import logo from "./logo.svg";
import "./App.css";
import PostList from "./component/postList/PostList";
import { Route, Routes } from "react-router-dom";
import PostInfo from "./component/postInfo/PostInfo";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<PostList />}/>
          <Route path="/:userId" element={<PostInfo />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
