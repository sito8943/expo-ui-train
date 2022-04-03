import React, { useState } from "react";

// prop-types
import PropTypes from "prop-types";

// icons
import { BsBookmarkDash, BsFillStarFill } from "react-icons/bs";

// emotion
import { StyleSheet } from "react-native";

// styles
import {
  titleArea,
  vrArea,
  vrButton,
  vrHr,
  starSpan,
  vrStarIcon,
  imageCardCss,
  markerButton,
  titleCss,
  markerShadow,
  cardShadow,
} from "./styles";

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
    height,
    width,
    backgroundImage: `url(${src})`,
  });

  return (
    <div
      style={`${imageCardCss} ${backgroundImage} ${
        !noShadow ? cardShadow : ""
      }`}
    >
      <div style={titleArea}>
        {!noTitle && (
          <>
            <h4 style={titleCss}>{title}</h4>
            {!noMarker && (
              <button style={markerButton} onClick={() => toggleMarker()}>
                <BsBookmarkDash style={`${toggle ? markerShadow : ""}`} />
              </button>
            )}
          </>
        )}
      </div>

      {!noButton && (
        <div style={vrArea}>
          <button style={vrButton}>Watch in VR</button>
          {!noStars && (
            <>
              <hr style={vrHr} />
              <span style={starSpan}>
                4.5 <BsFillStarFill style={vrStarIcon} />
              </span>
            </>
          )}
        </div>
      )}
    </div>
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
  width: 285,
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
