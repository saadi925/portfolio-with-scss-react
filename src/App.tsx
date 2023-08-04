import { useState } from "react";
import "./app.scss";
import {
  Contact,
  Introduction,
  Portfolio,
  Testimonials,
  Topbar,
  Works,
} from "./components";
import SideBar from "./components/sidebar";
const App = () => {
  const [isMenuOpen, setMenu] = useState(false);
  return (
    <div className="app">
      <Topbar menuState={{ isMenuOpen, setMenu }} />
      <SideBar menuState={{ isMenuOpen, setMenu }} />
      <div className="sections" onClick={() => setMenu(false)}>
        <Introduction />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App;
