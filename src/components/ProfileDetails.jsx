import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapView from "./MapView";
import axios from "axios";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`/data/profiles.json`).then((response) => {
      const selectedProfile = response.data.find((p) => p.id === parseInt(id));
      setProfile(selectedProfile);
    });
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-details">
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <h3>Location:</h3>
      <MapView coordinates={profile.coordinates} />
    </div>
  );
};

export default ProfileDetails;
