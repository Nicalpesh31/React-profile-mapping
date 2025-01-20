import React, { useState } from "react";

const AdminPage = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fyoung-businessman-using-computer-office-work-ive-got-to-put-some-thought-young-businessman-using-251149494.jpg&tbnid=fXcRXv8sLtu83M&vet=12ahUKEwjS5vTj1f-KAxX9pmMGHX3QIaYQxiAoCnoECAAQPQ..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Five-got-idea.html&docid=jzvgn6LdbSihUM&w=800&h=534&itg=1&q=photo%20man%20hd&ved=2ahUKEwjS5vTj1f-KAxX9pmMGHX3QIaYQxiAoCnoECAAQPQ",
      description: "Software Engineer",
      address: "123 Main St, Cityville",
    },
  ]);
  const [newProfile, setNewProfile] = useState({ name: "", photo: "", description: "", address: "" });

  const handleAddProfile = () => {
    const id = profiles.length ? profiles[profiles.length - 1].id + 1 : 1;
    setProfiles([...profiles, { id, ...newProfile }]);
    setNewProfile({ name: "", photo: "", description: "", address: "" });
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>

      <div>
        <h3>Add Profile</h3>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newProfile.address}
          onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
        />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>

      <div>
        <h3>Profiles</h3>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <p>{profile.name}</p>
            <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
