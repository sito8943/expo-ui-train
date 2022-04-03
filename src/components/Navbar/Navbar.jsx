import React from "react";

// icons
import { BsList, BsBell, BsChevronDown } from "react-icons/bs";

// styles
import {
  container,
  drawerButton,
  textListCss,
  notificationCss,
  spanCss,
} from "./styles";

const Navbar = () => {
  return (
    <div style={container}>
      <button onClick={null} style={drawerButton}>
        <BsList />
      </button>
      <button onClick={null} style={textListCss}>
        Europe
        <span style={spanCss}>
          <BsChevronDown />
        </span>
      </button>
      <button onClick={null} style={notificationCss}>
        <BsBell />
      </button>
    </div>
  );
};

export default Navbar;
