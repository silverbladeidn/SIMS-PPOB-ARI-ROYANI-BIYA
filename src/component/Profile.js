// src/components/Profile.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateProfile } from "../redux/authSlice";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get("https://api.example.com/profile", {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch(updateProfile(response.data));
    };
    fetchProfile();
  }, [dispatch, userInfo.token]);

  return (
    <div>
      <h2>Welcome, {userInfo?.name}</h2>
      <p>Balance: {userInfo?.balance}</p>
    </div>
  );
};

export default Profile;
