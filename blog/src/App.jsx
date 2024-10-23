import { Posts } from "./components/Posts";
import { Routes,Route } from "react-router-dom";
import { Post } from './components/Post';
import { ContactPage } from "./components/ContactPage";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Posts />}/>
      <Route path=":id" element={<Post />}/>
      <Route path="/contact" element={<ContactPage />}/>
    </Routes>
    </>
  )
}

export default App
