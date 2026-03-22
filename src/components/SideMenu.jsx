import React, { useState } from "react";
import "./SideMenu.css";

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ICON */}
      <div className="side-icon" onClick={() => setOpen(true)}>
        <i className="bi bi-list"></i>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* RIGHT SLIDE MENU */}
      <div className={`side-menu ${open ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;