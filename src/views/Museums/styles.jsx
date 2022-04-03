// emotion
import { StyleSheet } from "react-native";

const titleArea = StyleSheet.create({
  margin: "20px auto auto auto",
  width: "80%",
});

const smallItemContainer = StyleSheet.create({
  display: "flex",
  flexDirection: "column",
});

const smallItemSpan = StyleSheet.create({
  margin: "7px auto auto auto",
});

const starSpan = StyleSheet.create({
  color: "#626262",
  display: "flex",
  cursor: "pointer",
});

const titleCss = StyleSheet.create({
  color: "#1d1d1d",
});

export { starSpan, titleCss, titleArea, smallItemSpan, smallItemContainer };
