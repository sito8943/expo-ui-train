// emotion
import { StyleSheet } from "react-native";

const tabViewCss = StyleSheet.create({
  tabsContainerCss: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    width: "90%",
    margin: "auto",
    overflow: "scroll",
  },
  tabContainer: {
    width: "100%",
  },
});

export default tabViewCss;
