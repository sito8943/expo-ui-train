import React, { useState } from "react";

// react-native
import { View, ScrollView } from "react-native";

// prop-types
import PropTypes from "prop-types";

// components
import Tab from "./Tab/Tab";

// styles
import tabViewCss from "./style";

const TabView = (props) => {
  const { tabs, content } = props;

  const [active, setActive] = useState(0);

  return (
    <View style={tabViewCss.tabContainer}>
      <ScrollView contentContainerStyle={tabViewCss.tabsContainerCss}>
        {tabs.map((item, i) => (
          <Tab
            index={i}
            active={active === i ? true : false}
            key={`tab${i}`}
            text={item}
            action={() => setActive(i)}
          />
        ))}
      </ScrollView>
      <View>{content[active]}</View>
    </View>
  );
};

TabView.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TabView;
