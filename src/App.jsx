import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import './App.css'
import { Paper } from "@mui/material";
import { useTheme } from './components/ThemeContext'; 


function App() {
  const { themeChange } = useTheme();

  const [showMenu, setShowMenu] = useState(false);

  return (
      <Paper sx={{backgroundColor:themeChange.palette.background.default}}>
    <div style={{ height:'100%', position:'relative', overflow: showMenu === true && 'hidden', overflowX:'hidden'}}>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<AboutPage/>}/> 
      </Routes>
    </div>
      </Paper>
  );
}

export default App;
