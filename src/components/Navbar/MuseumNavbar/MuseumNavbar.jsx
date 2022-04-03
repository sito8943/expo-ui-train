import React from "react";

// icons
import { BsChevronLeft, BsBookmarkDash } from "react-icons/bs";

// styles
import { notificationCss, container } from "../styles";
import { museum } from "./styles";

function MuseumNavbar() {
  return (
    <div style={`${container} ${museum}`}>
      <button onClick={null} style={notificationCss}>
        <BsChevronLeft />
      </button>
      <button onClick={null} style={notificationCss}>
        <BsBookmarkDash />
      </button>
    </div>
  );
}

export default MuseumNavbar;
