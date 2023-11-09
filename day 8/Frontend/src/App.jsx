import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchUser from "./Components/SearchUser/SearchUser";
const App = () => {
  let [name, setName] = useState();
  let [SearchInfo, setSearchInfo] = useState();
  let api = `http://localhost:8000/user/${name}`;
  let handleSearch = async () => {
    GetSearchUser();
  };
  let GetSearchUser = async () => {
    try {
      const { data, status } = await axios.get(api);
      const detail = data.message;
      setSearchInfo(detail);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="appContainer">
      <div className="container">
        <div className="inputBoxWrapper">
          <input
            placeholder="enter the name "
            className="inputBox"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="searchBtn" onClick={handleSearch}>
            search
          </button>
        </div>
        <div className="results">
          <SearchUser SearchInfo={SearchInfo} />
        </div>
      </div>
    </div>
  );
};

export default App;
