import React from "react";

// react-native
import { View, Pressable, Text } from "react-native-web";

// icons
import { BsList, BsBell, BsChevronDown } from "react-icons/bs";

// styles
import navbarCss from "./styles";

const Navbar = () => {
  return (
    <View style={navbarCss.container}>
      <Pressable onClick={null} style={navbarCss.drawerButton}>
        <BsList />
      </Pressable>
      <Pressable onClick={null} style={navbarCss.textList}>
        Europe
        <Text style={navbarCss.span}>
          <BsChevronDown />
        </Text>
      </Pressable>
      <Pressable onClick={null} style={navbarCss.notification}>
        <BsBell />
      </Pressable>
    </View>
  );
};

export default Navbar;
