// emotion
import { StyleSheet } from "react-native";

const dockCss = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "rgb(243, 243, 243)",
    borderRadius: "10px 10px 0 0",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
  },
  button: {
    border: "none",
    color: "rgb(157, 153, 153)",
    padding: 10,
    fontSize: 18,
    backgroundColor: "rgb(243,243,243)",
    cursor: "pointer",
    height: 37,
  },
  activeButton: {
    border: "none",
    color: "rgb(157, 153, 153)",
    padding: 10,
    fontSize: 18,
    cursor: "pointer",
    height: 37,
    backgroundColor: "rgb(221,219,219)",
  },
});

export default dockCss;
