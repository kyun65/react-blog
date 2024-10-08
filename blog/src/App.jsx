import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Posts } from "./data/Posts";
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Post from './data/Post';



function App() {

return (
  <>
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path=":id" element={<Post />} />

    </Routes>

  </>
  );

}

export default App
