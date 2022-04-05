import React from "react";

// react-native
import { View } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import mobileCss from "./styles";

const Mobile = (props) => {
  const { children } = props;
  return <View style={mobileCss.container}>{children}</View>;
};

Mobile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mobile;
