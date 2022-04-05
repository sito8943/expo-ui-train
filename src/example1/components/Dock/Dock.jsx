import React, { useState } from "react";

// react-native
import { View, Pressable, Text } from "react-native";

// icons
import { BsBookmarkDash, BsHouse, BsPerson, BsWhatsapp } from "react-icons/bs";

// styles
import dockCss from "./styles";

const Dock = () => {
  const [active, setActive] = useState(1);

  return (
    <View style={dockCss.container}>
      <Pressable
        onPress={() => setActive(1)}
        style={active === 1 ? dockCss.activeButton : dockCss.button}
      >
        <BsHouse />
      </Pressable>
      <Pressable
        onPress={() => setActive(2)}
        style={active === 2 ? dockCss.activeButton : dockCss.button}
      >
        <BsWhatsapp />
      </Pressable>
      <Pressable
        onPress={() => setActive(3)}
        style={active === 3 ? dockCss.activeButton : dockCss.button}
      >
        <BsBookmarkDash />
      </Pressable>
      <Pressable
        onPress={() => setActive(4)}
        style={active === 4 ? dockCss.activeButton : dockCss.button}
      >
        <BsPerson />
      </Pressable>
    </View>
  );
};

export default Dock;
