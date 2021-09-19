import Topbar from "./components/topbar/Topbar";
import About from './components/About/About';
import Works from "./components/works/Works"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import IntroMain from "./components/intro/IntroMain/IntroMain";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <IntroMain/>
       <About/>
       <Works/>
     </div>
    </div>
  );
}

export default App;
