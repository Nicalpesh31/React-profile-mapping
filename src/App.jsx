import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import ProfileDetails from "./components/ProfileDetails";
import ProfileList from "./components/ProfileList";
import Home from "./components/Home";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
