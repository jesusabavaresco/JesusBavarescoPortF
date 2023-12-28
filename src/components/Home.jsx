import React, {useState, useRef} from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import FirstView from "../components/FirstView";
import About from "../components/About";
import Tech from "../components/Technologies";
import Proyects from "../components/Proyects";
import Contact from "../components/Contact";

function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Main showMenu={showMenu} setShowMenu={setShowMenu}/>
      <FirstView showMenu={showMenu}/>
      <About showMenu={showMenu}/>
      <Tech showMenu={showMenu}/>
      <Proyects/>
      <Contact />
    </div>
  );
}

export default Home;
