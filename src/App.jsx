import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Companies from "./pages/Companies";
import Interactions from "./pages/Interactions";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/interactions" element={<Interactions />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

