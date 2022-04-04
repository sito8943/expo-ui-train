import React from "react";

// react-native
import { Pressable, Text } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import singleTabCss from "./styles";

const Tab = (props) => {
  const { index, text, action, active } = props;

  return (
    <Pressable
      id={`t${index}`}
      onPress={action}
      style={active ? singleTabCss.activeButton : singleTabCss.buttonTextCss}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

Tab.defaultProps = {
  active: false,
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Tab;
