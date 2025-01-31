import "../styles/NavBtn.css";

export default function NavBtn({ isNavOpen, setIsNavOpen }) {
  function handleToggleNav() {
    setIsNavOpen((s) => !s);
  }

  return (
    <img
      src={isNavOpen ? "/icons/close-icon.svg" : "/icons/burger-icon.svg"}
      alt="toggle navigation"
      onClick={handleToggleNav}
      className="nav-btn"
    />
  );
}
