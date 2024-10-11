import { Posts } from "./components/Posts";
import { Routes,Route } from "react-router-dom";
import { Post } from './components/Post';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Posts />}/>
      <Route path=":id" element={<Post />}/>
    </Routes>
    </>
  )
}

export default App
