import React from "react";

// props-types
import PropTypes from "prop-types";

// react-native
import { View, Pressable } from "react-native";

// icons
import { BsChevronLeft, BsBookmarkDash } from "react-icons/bs";

// styles
import museumNavbar from "../styles";
import navbarCss from "../styles";

function MuseumNavbar(props) {
  const { onBack } = props;
  return (
    <View style={museumNavbar.container}>
      <Pressable onPress={onBack} style={navbarCss.notification}>
        <BsChevronLeft />
      </Pressable>
      <Pressable onPress={null} style={navbarCss.notification}>
        <BsBookmarkDash />
      </Pressable>
    </View>
  );
}

MuseumNavbar.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default MuseumNavbar;
