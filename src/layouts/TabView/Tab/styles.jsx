// emotion
import { StyleSheet } from "react-native";

const buttonTextCss = StyleSheet.create({
  minWidth: 100,
  border: "none",
  color: "#9d9999",
  padding: 10,
  fontSize: 15,
  backgroundColor: "none",
  cursor: "pointer",
});

const activeButton = StyleSheet.create({
  backgroundColor: "#e9e5e5 ",
});

export { buttonTextCss, activeButton };
