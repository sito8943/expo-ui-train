import React, { useState } from "react";

// icons
import { BsSearch, BsSliders } from "react-icons/bs";

// styles
import { containerCss, inputCss, searchCss, filterButtonCss } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={containerCss}>
      <button onClick={null} style={searchCss}>
        <BsSearch />
      </button>
      <input
        style={inputCss}
        value={search}
        placeholder="Search countries, museums..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button style={filterButtonCss} onClick={null}>
        <BsSliders />
      </button>
    </div>
  );
};

export default Search;
