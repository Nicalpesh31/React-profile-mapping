import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";
import MapComponent from "./MapComponent";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetch("/profiles.json")
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="home">
      <SearchBar profiles={profiles} setProfiles={setProfiles} />
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>
      {selectedProfile && <MapComponent profile={selectedProfile} />}
    </div>
  );
};

export default Home;
