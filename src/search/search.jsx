import React, { useState } from "react";
import MainContent from "../mainContent/mainContent";
const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState([]);
  const userInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall(inputValue);
  };

  const apiCall = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
    console.log(userData);
    console.log(data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <button className="btn">Search</button>
        <input
          type="search"
          onChange={userInput}
          value={inputValue}
          placeholder="Enter your pokemon name"
          className="btn-search"
        />
      </form>
      <div>
        <MainContent data={userData} />
      </div>
    </div>
  );
};

export default Search;
