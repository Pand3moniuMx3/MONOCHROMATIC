import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav({ isNavOpen, reactData, setIsNavOpen }) {
  function handleCloseNav() {
    setIsNavOpen(false);
  }

  return (
    <aside className={`nav ${isNavOpen && "open"}`}>
      {reactData.map((category) => (
        <NavItem
          key={category.id}
          category={category}
          handleCloseNav={handleCloseNav}
        />
      ))}
    </aside>
  );
}

function NavItem({ category, handleCloseNav }) {
  return (
    <div className="nav-item">
      <b className="title">{category.category}</b>
      <div className="list">
        {category.items.map((hook) => (
          <Link
            key={hook.title}
            className="item"
            to={`${category.path}/${hook.path}`}
            onClick={handleCloseNav}
          >
            {hook.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
