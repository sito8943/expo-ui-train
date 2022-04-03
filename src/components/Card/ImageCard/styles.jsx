// emotion
import { StyleSheet } from "react-native";

const titleArea = StyleSheet.create({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "90%",
  zIndex: 1,
});

const vrArea = StyleSheet.create({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#9b9999",
  padding: "0 10px",
  borderRadius: 5,
  zIndex: 1,
  height: 42,
  cursor: "pointer",
  marginBottom: -20,
  "&:hover": {
    backgroundColor: "#abaaaa",
  },
});

const vrButton = StyleSheet.create({
  color: "aliceblue",
  fontWeight: 700,
  backgroundColor: "none",
  border: "none",
  cursor: "pointer",
});

const vrHr = StyleSheet.create({
  margin: "0 10px",
  height: "90%",
  borderColor: "#f0f8ff5e",
  cursor: "pointer",
});

const starSpan = StyleSheet.create({
  color: "aliceblue",
  display: "flex",
  cursor: "pointer",
});

const vrStarIcon = StyleSheet.create({
  marginLeft: 7,
  marginTop: -1,
  cursor: "pointer",
});

const imageCardCss = StyleSheet.create({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: 15,
  margin: "auto",
});

const cardShadow = StyleSheet.create({
  boxShadow: "0px 15px 50px -20px",
});

const markerButton = StyleSheet.create({
  border: "none",
  color: "aliceblue",
  padding: 5,
  fontSize: 18,
  backgroundColor: "#787676",
  cursor: "pointer",
  height: 29,
});

const titleCss = StyleSheet.create({
  color: "aliceblue",
});

const markerShadow = StyleSheet.create({
  boxShadow: "0 0 25px 0",
});

export {
  cardShadow,
  titleArea,
  vrArea,
  vrButton,
  vrHr,
  starSpan,
  vrStarIcon,
  imageCardCss,
  markerButton,
  titleCss,
  markerShadow,
};
