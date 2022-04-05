import React, { useEffect, useState } from "react";

// react-native
import { View, StyleSheet } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import smallItem from "./styles";

const SmallItem = (props) => {
  const { children, index, total } = props;

  const [className, setClassName] = useState(smallItem.smallItem);

  useEffect(() => {
    const newClassName = {
      height: smallItem.smallItem.height,
      width: smallItem.smallItem.width,
      marginVertical: smallItem.smallItem.marginVertical,
    };
    // start
    if (index !== 0)
      newClassName.marginRight = smallItem.smallMiddle.marginRight;
    // middle
    if (index === 0 && index < total - 1) {
      newClassName.marginLeft = smallItem.smallStart.marginLeft;
      newClassName.marginRight = smallItem.smallStart.marginRight;
    }
    // end
    if (index === total - 1)
      newClassName.marginRight = smallItem.smallEnd.marginRight;
    setClassName(StyleSheet.create({ smallItem: newClassName }));
    console.log(newClassName);
  }, []);

  return <View style={className.smallItem}>{children}</View>;
};

SmallItem.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default SmallItem;
