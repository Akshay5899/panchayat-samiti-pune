import { Link } from "react-router-dom";
import { menuItems } from "../data/menu"; // import your menu
import "../styles/sitemap.css";
import BannerAll from "../components/BannerAll";

function Sitemap({ title }) {
  const renderSitemap = (items, isTopLevel = false) => {
    return (
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.path ? (
              <Link className={isTopLevel ? "top-level-link" : ""} to={item.path} target="blank">
                {item.name}
              </Link>
            ) : (
              <span className={isTopLevel ? "top-level-link" : ""}>
                {item.name}
              </span>
            )}
            {item.submenu && renderSitemap(item.submenu, false)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <BannerAll />
      <div className="sitemap-page">
        <div className="container">
          <h1>Sitemap</h1>
          {renderSitemap(menuItems, true)}
        </div>
      </div>
    </div>
  );
}

export default Sitemap;