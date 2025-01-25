import React from "react";

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div className="profile-card">
      <img
        src={profile.photo}
        alt={profile.name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <p>{profile.address}</p>
      <div className="card-actions">
        <button onClick={() => onSummaryClick(profile)}>Summary</button>
      </div>
    </div>
  );
};

export default ProfileCard;
