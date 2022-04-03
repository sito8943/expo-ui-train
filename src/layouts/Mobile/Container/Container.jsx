import React from "react";

// prop-types
import PropTypes from "prop-types";

// styles
import { mobileContainer } from "./styles";

const Container = (props) => {
  const { children } = props;
  return <div style={mobileContainer}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
