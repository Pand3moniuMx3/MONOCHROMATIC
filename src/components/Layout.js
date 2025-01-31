import Nav from "./Nav";
import Main from "./Main";
import NavBtn from "./NavBtn";
import "../styles/Layout.css";
import { useState } from "react";

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="layout">
      <NavBtn isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Main />
    </section>
  );
}
