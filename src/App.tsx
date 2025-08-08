import { Routes, Route } from "react-router-dom";
import { Search } from "./components/Search";
import "./App.css";

const App = () => {
return (
  <>
  <Routes>
    <Route path="/" element={<Search/>}/>



  </Routes>
  </>
);
};

export default App;

// ✅ Fetch movies from OMDb API
// ✅ Search for movies by title
// ✅ Display movie details on a separate page
//🔹 Concepts: React Router, API Requests
