import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import './App.css'

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{backgroundColor:'black', height:'100%', position:'relative', overflow: showMenu === true && 'hidden'}}>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<AboutPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
