import React from "react";

// react-native
import { ScrollView } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import mobileContainer from "./styles";

const Container = (props) => {
  const { children } = props;
  return <ScrollView style={mobileContainer.container}>{children}</ScrollView>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
