import React, { useState } from "react";

const SearchBar = ({ profiles, setProfiles }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setProfiles(filteredProfiles);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search profiles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
