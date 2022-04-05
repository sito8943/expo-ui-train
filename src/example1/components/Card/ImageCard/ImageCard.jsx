import React, { useState } from "react";

// react-native
import { View, Text, Pressable, ImageBackground } from "react-native";

// prop-types
import PropTypes from "prop-types";

// icons
import { BsBookmarkDash, BsFillStarFill } from "react-icons/bs";

// emotion
import { StyleSheet } from "react-native";

// styles
import imageCardCss from "./styles";

const ImageCard = (props) => {
  const {
    title,
    noMarker,
    noTitle,
    noButton,
    noStars,
    noShadow,
    src,
    width,
    height,
  } = props;

  const [toggle, setToggle] = useState(false);

  const toggleMarker = () => {
    setToggle(!toggle);
  };

  const backgroundImage = StyleSheet.create({
    imageCarCssContainer: {
      height,
      width,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: 15,
      margin: "auto",
      boxShadow: !noShadow ? "0px 15px 50px -20px" : "",
    },
    imageBackground: {
      borderRadius: 15,
    },
  });

  return (
    <ImageBackground
      source={src}
      imageStyle={backgroundImage.imageBackground}
      style={backgroundImage.imageCarCssContainer}
    >
      <View style={{ width }}>
        {!noTitle && (
          <View style={imageCardCss.title}>
            <Text style={imageCardCss.titleText}>{title}</Text>
            {!noMarker && (
              <Pressable
                style={imageCardCss.markerButton}
                onClick={() => toggleMarker()}
              >
                <BsBookmarkDash style={toggle ? markerShadow : ""} />
              </Pressable>
            )}
          </View>
        )}
      </View>

      {!noButton && (
        <View style={imageCardCss.vrArea}>
          <Pressable style={imageCardCss.vrButton}>
            <Text style={imageCardCss.vrButtonText}>Watch in VR</Text>

            {!noStars && (
              <>
                <View style={imageCardCss.vrHr} />
                <Text style={imageCardCss.starSpan}>
                  4.5 <BsFillStarFill style={imageCardCss.vrStarIcon} />
                </Text>
              </>
            )}
          </Pressable>
        </View>
      )}
    </ImageBackground>
  );
};

ImageCard.defaultProps = {
  // booleans
  noMarker: false,
  noTitle: false,
  noButton: false,
  noStars: false,
  noShadow: false,
  // numbers
  width: 320,
  height: 270,
  // strings
  title: "",
};

ImageCard.propTypes = {
  // booleans
  noMarker: PropTypes.bool,
  noTitle: PropTypes.bool,
  noButton: PropTypes.bool,
  noStars: PropTypes.bool,
  noShadow: PropTypes.bool,
  // numbers
  width: PropTypes.number,
  height: PropTypes.number,
  // strings
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default ImageCard;
