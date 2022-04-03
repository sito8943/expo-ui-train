// emotion
import { StyleSheet } from "react-native";

const searchCss = StyleSheet.create({
  backgroundColor: "none",
  padding: "3px 0px 0 15px",
  border: "none",
  color: "#626262",
  fontSize: 20,
  cursor: "pointer",
});

const inputCss = StyleSheet.create({
  border: "none",
  padding: 15,
  color: "#626262",
  backgroundColor: "none",
  fontSize: "15px 15px 15px 5px",
});

const filterButtonCss = StyleSheet.create({
  backgroundColor: "#a19d9d",
  color: "aliceblue",
  border: "none",
  padding: "14px 15px",
  borderRadius: 5,
  fontSize: "15px",
  cursor: "pointer",
});

const containerCss = StyleSheet.create({
  backgroundColor: "#e9e5e5",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "85%",
  margin: "auto",
});

export { searchCss, inputCss, filterButtonCss, containerCss };
