// emotion
import { StyleSheet } from "react-native";

const museumCss = StyleSheet.create({
  titleArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    margin: "auto",
    marginTop: 40,
    zIndex: 1,
  },
  smallItemContainer: {
    flexDirection: "column",
  },
  smallItemSpan: {
    margin: "auto",
    marginTop: 7,
  },
  starSpan: {
    color: "#626262",
    flexDirection: "row",
    cursor: "pointer",
  },
  titleCss: {
    color: "#1d1d1d",
    fontWeight: "bold",
    fontSize: 15
  },
});

export default museumCss;
