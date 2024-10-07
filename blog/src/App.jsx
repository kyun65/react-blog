import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Posts } from "./data/Posts";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Posts />
    </>
  )
}

export default App
