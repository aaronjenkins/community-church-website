import { useState } from "react";
import config from "../config";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav-brand">{config.churchName}</div>
        <ul className={`nav-links${open ? " open" : ""}`}>
          <li><a href="#about" onClick={() => setOpen(false)}>{config.nav.about}</a></li>
          <li><a href="#sermons" onClick={() => setOpen(false)}>{config.nav.sermons}</a></li>
          <li><a href="#bulletins" onClick={() => setOpen(false)}>{config.nav.bulletins}</a></li>
          <li><a href="#vbs" onClick={() => setOpen(false)}>{config.nav.vbs}</a></li>
          <li><a href="#events" onClick={() => setOpen(false)}>{config.nav.events}</a></li>
          <li><a href="#connect" onClick={() => setOpen(false)}>{config.nav.connect}</a></li>
          <li><a href="#donate" className="btn-donate" onClick={() => setOpen(false)}>{config.nav.donate}</a></li>
        </ul>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          &#9776;
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
