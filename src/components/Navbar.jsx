// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#0044cc", padding: "10px" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0 }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/students" style={{ color: "white", textDecoration: "none" }}>Students</Link></li>
        <li><Link to="/companies" style={{ color: "white", textDecoration: "none" }}>Companies</Link></li>
        <li><Link to="/interactions" style={{ color: "white", textDecoration: "none" }}>Interactions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
