import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Posts } from "./data/Posts";
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './data/Home';
import About from './data/About';
import Contact from './data/Contact';
import NoMatch from './data/nomatch';



function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
// <Posts />
//     </>
//   )
return (

  <div className="App">
      <h1>Hello React Router v6</h1>




      <ul>
        <li>
        <NavLink style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/">Home</NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/about">About</NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/contact">Contact</NavLink>
        </li>
      </ul>


      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );

}

export default App
