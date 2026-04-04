import { useState } from "react";
import config from "../config";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav-brand">{config.churchName}</div>
        <ul className={`nav-links${open ? " open" : ""}`}>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#sermons" onClick={() => setOpen(false)}>Sermons</a></li>
          <li><a href="#events" onClick={() => setOpen(false)}>Events</a></li>
          <li><a href="#connect" onClick={() => setOpen(false)}>Connect</a></li>
          <li><a href="#donate" className="btn-donate" onClick={() => setOpen(false)}>Donate</a></li>
        </ul>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          &#9776;
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
