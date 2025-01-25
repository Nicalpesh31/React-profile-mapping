import React from "react";
import { Link } from "react-router-dom";

const ProfileList = () => {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      photo: "https://via.placeholder.com/150",
      description: "Software Engineer",
      address: "123 Main St, Cityville",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
      description: "Data Scientist",
      address: "456 Elm St, Townsville",
    },
  ];

  return (
    <div className="profile-list">
      <h2>Profiles</h2>
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.photo} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <Link to={`/profile/${profile.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
