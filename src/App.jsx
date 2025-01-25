import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Header Component
import Home from "./components/Home"; // Correctly importing Home component
import AdminPage from "./components/AdminPage"; // Admin Page for managing profiles
import SearchPage from "./components/SearchBar"; // Corrected the path for SearchBar component

const App = () => {
  return (
    <Router>
      <Header /> {/* If you want the header to display across all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Fixed component name */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
