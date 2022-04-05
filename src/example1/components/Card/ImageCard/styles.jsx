// emotion
import { StyleSheet } from "react-native";

const imageCardCss = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "auto",
    marginTop: 10,
    zIndex: 1,
  },
  titleText: {
    color: "aliceblue",
    fontWeight: "bold",
  },
  vrArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(155, 153, 153)",
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 5,
    zIndex: 1,
    height: 42,
    cursor: "pointer",
    marginBottom: -20,
  },
  vrButton: {
    backgroundColor: "none",
    border: "none",
    cursor: "pointer",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  vrButtonText: {
    color: "aliceblue",
    fontWeight: 700,
  },
  vrHr: {
    border: "1px solid rgba(240 248 255 / 31%)",
    height: 35,
    marginHorizontal: 10,
    marginVertical: 0,
    cursor: "pointer",
  },
  starSpan: {
    color: "aliceblue",
    flexDirection: "row",
    cursor: "pointer",
  },
  vrStarIcon: {
    marginLeft: 7,
    marginTop: -1,
  },
  markerButton: {
    border: "none",
    color: "aliceblue",
    padding: 5,
    fontSize: 18,
    backgroundColor: "rgb(120, 118, 118)",
    cursor: "pointer",
    height: 29,
  },
  markerShadow: {
    boxShadow: "0 0 25px 0",
  },
});

export default imageCardCss;
