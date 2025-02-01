import { useEffect, useReducer } from "react";
import "../styles/NavBtn.css";

const defThemeState = {
  status: "darkmode",
  white: "#f2f3f4",
  grey: "#4b4b4b",
  text: "#d1d1d1",
  darkGrey: "#111111",
  black: "#000000",
};

function reducer(state, action) {
  switch (action.type) {
    case "mode/dark":
      return {
        ...defThemeState,
      };
    case "mode/light":
      return {
        ...state,
        status: "lightmode",
        white: "#17191f", // heading color
        grey: "#d1d1d1", // border color
        text: "#737373", // text color
        darkGrey: "#e3e7eb", // border color
        black: "#f2f3f4", // background color
      };
    default:
      throw new Error("unkonwn theme action");
  }
}

export default function NavBtn({ isNavOpen, setIsNavOpen }) {
  const [state, dispatch] = useReducer(reducer, defThemeState);

  function handleToggleNav() {
    setIsNavOpen((s) => !s);
  }

  function toggleTheme() {
    dispatch({
      type: state.status === "darkmode" ? "mode/light" : "mode/dark",
    });
  }

  useEffect(() => {
    document.documentElement.style.setProperty("--clr-white", state.white);
    document.documentElement.style.setProperty("--clr-grey", state.grey);
    document.documentElement.style.setProperty("--clr-text", state.text);
    document.documentElement.style.setProperty(
      "--clr-dark-grey",
      state.darkGrey
    );
    document.documentElement.style.setProperty("--clr-black", state.black);
  }, [state]);

  return (
    <nav className="nav-btn-container">
      <img
        src={isNavOpen ? "/icons/close-icon.svg" : "/icons/burger-icon.svg"}
        alt="toggle navigation"
        onClick={handleToggleNav}
        className="nav-btn"
      />
      <img
        src="/icons/light-mode-icon.svg"
        alt="toggle light mode"
        onClick={toggleTheme}
      />
    </nav>
  );
}
