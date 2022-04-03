// emotion
import { StyleSheet } from "react-native";

const searchCss = StyleSheet.create({
  container: {
    backgroundColor: "rgb(233, 229, 229)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "auto",
    marginTop: 20,
  },
  searchButton: {
    backgroundColor: "none",
    paddingTop: 3,
    paddingHorizontal: 10,
    border: "none",
    color: "rgb(98, 98, 98)",
    fontSize: 20,
    cursor: "pointer",
  },
  input: {
    border: "none",
    width: "100%",
    padding: 15,
    color: "rgb(98, 98, 98)",
    backgroundColor: "none",
    fontSize: "15px 15px 15px 5px",
  },
  filterButton: {
    backgroundColor: "rgb(161, 157, 157)",
    color: "aliceblue",
    border: "none",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: "15px",
    cursor: "pointer",
  },
});

export default searchCss;
