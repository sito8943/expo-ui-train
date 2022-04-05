import React, { useEffect, useState } from "react";

// react-native
import { View, StyleSheet } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import itemCss from "./styles";

const Item = (props) => {
  const { index, children, total, noMargin } = props;

  const [className, setClassName] = useState(itemCss.item);

  useEffect(() => {
    const newClassName = { height: itemCss.item.height };
    // vertical margins
    if (!noMargin) {
      if (index % 2) newClassName.marginTop = itemCss.even.marginTop;
      else newClassName.marginBottom = itemCss.odd.marginBottom;
    }
    // start
    if (index !== 0) newClassName.marginRight = itemCss.middleCss.marginRight;
    // middle
    if (index === 0 && index < total - 1) {
      newClassName.marginLeft = itemCss.startCss.marginLeft;
      newClassName.marginRight = itemCss.startCss.marginRight;
    }
    // end
    if (index === total - 1)
      newClassName.marginRight = itemCss.endCss.marginRight;
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
