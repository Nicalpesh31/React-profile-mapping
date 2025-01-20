import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    
    const profiles = [
      {
        id: 1,
        name: "John Doe",
        photo: "https://via.placeholder.com/150",
        description: "Software Engineer",
        address: "123 Main St, Cityville",
        interests: "Coding, Music",
        contact: "john.doe@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        photo: "https://via.placeholder.com/150",
        description: "Data Scientist",
        address: "456 Elm St, Townsville",
        interests: "Data Analytics, Travel",
        contact: "jane.smith@example.com",
      },
    ];
    const selectedProfile = profiles.find((profile) => profile.id === parseInt(id));
    setProfile(selectedProfile);
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-details">
      <h2>{profile.name}'s Details</h2>
      <img src={profile.photo} alt={profile.name} />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Interests:</strong> {profile.interests}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
    </div>
  );
};

export default ProfileDetails;
