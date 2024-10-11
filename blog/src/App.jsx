
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";
import { Routes,Route} from "react-router-dom"

function App() {


  return (
    <>


        <Routes>
        <Route path="/" element={<Posts />} />
        <Route path=":id" element={<Post />} />
    </Routes>

    </>
  )
}

export default App
