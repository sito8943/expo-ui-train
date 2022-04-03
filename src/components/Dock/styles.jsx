// emotion
import { StyleSheet } from "react-native";

const dockCss = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 15px 15px 15px",
    margin: "auto auto -10px auto",
    width: "85%",
  },
  button: {
    border: "none",
    color: "#9d9999",
    padding: 10,
    fontSize: 18,
    backgroundColor: "rgb(243,243,243)",
    cursor: "pointer",
    height: 37,
  },
  activeButton: {
    border: "none",
    color: "#9d9999",
    padding: 10,
    fontSize: 18,
    cursor: "pointer",
    height: 37,
    backgroundColor: "rgb(221,219,219)",
  },
});

export default dockCss;
