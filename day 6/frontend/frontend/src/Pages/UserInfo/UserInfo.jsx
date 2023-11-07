import React, { useEffect, useState } from "react";
import styles from "./UserInfo.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  let api = `http://localhost:8000/user/${id}`;

  useEffect(() => {
    FetchUserInfo();
  }, [id]); // Make sure to include 'id' in the dependency array to trigger the effect when 'id' changes.

  const FetchUserInfo = async () => {
    try {
      const response = await axios.get(api);
      const userInfo = response.data.message;
      setUser(userInfo);
      console.log("this is single userInfo", userInfo);
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };

  return (
    <div>
      {user && (
        <>
          <p>Name: {user.Name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.Address}</p>
        </>
      )}
    </div>
  );
};

export default UserInfo;
