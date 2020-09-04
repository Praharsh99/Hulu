import React, { useState } from "react";

import Header from "./components/header/header.component.jsx";
import Navbar from "./components/navbar/navbar.component.jsx";
import Results from "./components/results/results.component.jsx";

import requests from "./tmdb/requests";

import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSubmit = (e, query) => {
    e.preventDefault();
    setSearchQuery(query);
    setSelectedOption(requests.fetchSearch);
  };

  return (
    <div className="app">
      <Header handleSubmit={handleSubmit} />

      <Navbar setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
