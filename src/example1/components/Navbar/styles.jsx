// emotion
import { StyleSheet } from "react-native";

const navbarCss = StyleSheet.create({
  notification: {
    border: "none",
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: 15,
    color: "rgb(98, 98, 98)",
    padding: 5,
    marginTop: 12,
    cursor: "pointer",
    height: 37,
  },
  textList: {
    border: "none",
    backgroundColor: "none",
    fontSize: 15,
    color: "rgb(189, 187, 187)",
    padding: 10,
    cursor: "pointer",
    marginTop: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  drawerButton: {
    border: "none",
    backgroundColor: "rgb(0, 0, 0, 0)",
    fontSize: 20,
    color: "rgb(98, 98, 98)",
    padding: 5,
    cursor: "pointer",
    marginTop: 5,
    height: 37,
  },
  span: {
    marginTop: 6,
    marginLeft: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
  },
});

export default navbarCss;
