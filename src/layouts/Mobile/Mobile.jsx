import React from "react";

// react-native
import { ScrollView } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import mobileCss from "./styles";

const Mobile = (props) => {
  const { children } = props;
  return (
    <ScrollView contentContainerStyle={mobileCss.container}>
      {children}
    </ScrollView>
  );
};

Mobile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mobile;
