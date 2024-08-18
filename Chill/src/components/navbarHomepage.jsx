import webLogo from "./images/logo.png";
import profileLogo from "./images/avatar.png";
import "../Homepage.css";
import { useState } from "react";

function NavbarHomepage() {
  const menus = ["Profil Saya", "Ubah Premium", "Keluar"];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <img src={webLogo} alt="Web Logo" className="navbarLogo" />
      <nav>
        <ul>
          <li>Series</li>
          <li>Film</li>
          <li>Daftar Saya</li>
        </ul>
      </nav>
      <img
        onClick={() => setOpen(!open)}
        src={profileLogo}
        alt="profile"
        className="profileLogo"
      />
      {open && (<div className="dropdown">
        <ul>
          {menus.map((menu) => (
            <li
              onClick={() => setOpen(false)}
              className="dropdown-item"
              key={menu}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>)}
    </div>
  );
}

export default NavbarHomepage;
