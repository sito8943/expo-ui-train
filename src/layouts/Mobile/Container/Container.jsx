import React from "react";

// react-native
import { ScrollView, StyleSheet } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
// import mobileContainer from "./styles";

const Container = (props) => {
  const { children, marginTop } = props;

  const mobileContainer = StyleSheet.create({
    container: {
      width: "100%",
      overflow: "scroll",
      marginTop: marginTop,
    },
  });

  return <ScrollView style={mobileContainer.container}>{children}</ScrollView>;
};

Container.defaultProps = {
  marginTop: 0,
};

Container.propTypes = {
  marginTop: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Container;
