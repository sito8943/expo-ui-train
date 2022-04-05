import React from "react";

// react-native
import { ScrollView, View } from "react-native";

// prop-types
import PropTypes from "prop-types";

// components
import Item from "./Item/Item";
import SmallItem from "./SmallItem/SmallItem";

// styles
import slideShowCss from "./styles";

const Slideshow = (props) => {
  const { content, noMargin, small } = props;

  return (
    <ScrollView contentContainerStyle={{ overflow: "scroll" }}>
      <View style={slideShowCss.slideshow} id="slideshow">
        {content.map((item, i) => {
          return !small ? (
            <Item
              key={`item${i}`}
              noMargin={noMargin}
              index={i}
              total={content.length}
            >
              {item}
            </Item>
          ) : (
            <SmallItem key={`item${i}`} index={i} total={content.length}>
              {item}
            </SmallItem>
          );
        })}
      </View>
    </ScrollView>
  );
};

Slideshow.defaultProps = {
  noMargin: false,
  small: false,
};

Slideshow.propTypes = {
  noMargin: PropTypes.bool,
  small: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.any),
};

export default Slideshow;
