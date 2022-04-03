// emotion
import { StyleSheet } from "react-native";

const tabsContainerCss = StyleSheet.create({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 0 0px 0px",
  overflow: "auto",
  width: "85%",
  margin: "auto",
});

const tabContainer = StyleSheet.create({
  width: "100%",
});

export { tabContainer, tabsContainerCss };
