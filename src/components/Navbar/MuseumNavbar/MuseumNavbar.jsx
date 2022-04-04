import React from "react";

// react-native
import { View, Pressable } from "react-native";

// icons
import { BsChevronLeft, BsBookmarkDash } from "react-icons/bs";

// styles
import museumNavbar from "../styles";
import navbarCss from "../styles";

function MuseumNavbar() {
  return (
    <View style={museumNavbar.container}>
      <Pressable onPress={null} style={navbarCss.notification}>
        <BsChevronLeft />
      </Pressable>
      <Pressable onPress={null} style={navbarCss.notification}>
        <BsBookmarkDash />
      </Pressable>
    </View>
  );
}

export default MuseumNavbar;
