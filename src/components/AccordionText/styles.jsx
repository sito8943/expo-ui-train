// emotion
import { StyleSheet } from "react-native";

const accordionCss = StyleSheet.create({
  width: "80%",
  margin: "auto",
  transition: "all 200ms ease",
});

const pCss = StyleSheet.create({
  marginTop: -5,
  lineHeight: "30px",
  fontSize: 15,
  color: "#9f9d9d",
});

const readMoreSpan = StyleSheet.create({
  fontWeight: "600",
  color: "#545252",
});

export { readMoreSpan, accordionCss, pCss };
