import React, { useEffect, useState } from "react";

// react-native
import { View, StyleSheet } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import item from "./styles";

const Item = (props) => {
  const { index, children, total, noMargin } = props;

  const [className, setClassName] = useState(item.item);

  useEffect(() => {
    const newClassName = { height: item.item.height };
    // vertical margins
    if (!noMargin) {
      if (index % 2) newClassName.marginTop = item.even.marginTop;
      else newClassName.marginBottom = item.odd.marginBottom;
    }
    // start
    if (index !== 0) newClassName.marginRight = item.middle.marginRight;
    // middle
    if (index === 0 && index < total - 1) {
      newClassName.marginLeft = item.start.marginLeft;
      newClassName.marginRight = item.start.marginRight;
    }
    // end
    if (index === total - 1)
      newClassName.marginRight = item.end.marginRight;
    setClassName(StyleSheet.create({ item: newClassName }));
  }, []);

  return <View style={className.item}>{children}</View>;
};

Item.defaultProps = {
  noMargin: false,
};

Item.propTypes = {
  noMargin: PropTypes.bool,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Item;
