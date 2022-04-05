import React, { useState } from "react";

// react-native
import { View, Text, Pressable } from "react-native";

// prop-types
import PropTypes from "prop-types";

// styles
import accordionText from "./styles";

const AccordionText = (props) => {
  const { text } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <View style={accordionText.accordionCss}>
      <Text style={accordionText.pCss}>
        {text.length >= 68 && !expanded ? (
          <>{text.substring(0, 68)}... </>
        ) : (
          <>{text}... </>
        )}
        {text.length >= 68 && (
          <Pressable onPress={() => setExpanded(!expanded)}>
            <Text style={accordionText.readMoreSpan}>
              {!expanded ? "Read More" : "Reduce"}
            </Text>
          </Pressable>
        )}
      </Text>
    </View>
  );
};

AccordionText.defaultProps = {
  text: PropTypes.string.isRequired,
};

export default AccordionText;
