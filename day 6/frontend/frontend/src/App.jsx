import React, { useEffect, useState } from "react";
import "./App.css";
import Usercard from "./component/userCard/Usercard";
import axios from "axios";
// import { use } from "../../../backend/Routes";
const App = () => {
  let [userCollection, setUserCollection] = useState([]);
  let api = "http://localhost:8000/user";

  useEffect(() => {
    FetchUser();
  }, []);

  let FetchUser = async () => {
    let data = await axios.get(api);
    let users = data.data.message.data;
    console.log("this is users message", users);
    setUserCollection(users);
  };

  return (
    <div className="appContainer">
      {userCollection.map((item) => {
        return <Usercard item={item} />;
      })}
    </div>
  );
};

export default App;
