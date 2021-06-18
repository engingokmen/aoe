import React from "react";
import Nav from "../common/navigation/Nav.js";

const Layout = (props) => {
  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
