import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { useGuide } from "../context/GuideContext";
import { useState } from "react";

export default function Nav({ isNavOpen, setIsNavOpen }) {
  const { data } = useGuide();

  function handleCloseNav() {
    setIsNavOpen(false);
  }

  // search bar
  const [query, setQuery] = useState("");
  const filteredData = [...data]
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <aside className={`nav ${isNavOpen && "open"}`}>
      <div className="nav-item">
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <img
            src="/icons/search-icon.svg"
            alt="search"
            className="search-icon"
          />
        </div>
      </div>
      {filteredData.map((category) => (
        <NavItem
          key={category.id}
          category={category}
          handleCloseNav={handleCloseNav}
        />
      ))}
      {filteredData === 0 && (
        <p style={{ color: "var(--clr-grey)" }}>No items matched</p>
      )}
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
