
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts/>} />
            <Route path=":id" element={<Post/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
