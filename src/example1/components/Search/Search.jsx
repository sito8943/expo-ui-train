import React, { useState } from "react";

// react-native
import { View, Text, TextInput, Pressable } from "react-native";

// icons
import { BsSearch, BsSliders } from "react-icons/bs";

// styles
import searchCss from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={searchCss.container}>
      <Pressable onPress={null} style={searchCss.searchButton}>
        <BsSearch />
      </Pressable>
      <TextInput
        style={searchCss.input}
        value={searchCss.search}
        placeholder="Search countries, museums..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Pressable style={searchCss.filterButton} onPress={null}>
        <BsSliders />
      </Pressable>
    </View>
  );
};

export default Search;
