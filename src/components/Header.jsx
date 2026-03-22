import { Link, useNavigate } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";
import Translator from "./Translator";
import SideMenu from "./SideMenu";
import { menuItems } from "../data/menu"; // dynamic menu
import "./header.css";


function Header() {
// Inside renderMenu function


const renderMenu = (items, isSubmenu = false) =>
  items.map((item, idx) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
      <li
        key={idx}
        className={`nav-item dropdown ${isSubmenu ? "dropdown-submenu" : ""}`}
      >
        {/* Parent link */}
        <Link
          to={item.path || "#"}
          className="nav-link d-flex justify-content-between align-items-center"
        >
          {item.name}
          {hasSubmenu && <i
      className={`bi ${isSubmenu ? "bi-caret-right-fill" : "bi-caret-down-fill"} ms-2`}
    ></i>}
        </Link>

        {/* Submenu */}
        {hasSubmenu && (
          <ul className="dropdown-menu">
            {renderMenu(item.submenu, true)}
          </ul>
        )}
      </li>
    );
  });
  return (
    <header>
      {/* Top Bar */}
      <div className="gov-bar">
        <div className="container top-h g-3 d-flex justify-content-between align-items-center">
          <div className="gov-text">
            <a href="https://maharashtra.gov.in/" target="_blank">
              महाराष्ट्र शासन | Government of Maharashtra
            </a>
          </div>
          <div className="gov-icons">
            <i className="bi bi-search"></i>
            <span className="divider"></span>
            <a href="/साइटमॅप" target="blank"><i className="bi bi-diagram-3"></i></a>
            <span className="divider"></span>
            <a href="#" target="blank"><i className="bi bi-gear"></i></a>
            <span className="divider"></span>
            <Translator />
            <div className="header-right">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="top-header container-fluid">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <Link to="/">
              <img src="/images/emblem.png" className="emblem" alt="" />
            </Link>
            <div className="g-3">
              <Link to="/" className="sitetitle">
                <h6 className="marathi-title">पंचायत समिती पुणे</h6>
              </Link>
              <Link to="/" className="sitetitle">
                <h2 className="site-title">Panchayat Samiti Pune</h2>
              </Link>
            </div>
          </div>
          <div className="d-flex gap-3">
            <img src="/images/logo1.png" className="gov-logo" alt="" />
            <img src="/images/logo2.png" className="gov-logo" alt="" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="main-nav">
        <div className="container menu-all">
          <nav className="navbar navbar-expand-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav m-auto">{renderMenu(menuItems)}</ul>
            </div>
          </nav>
          <SideMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;