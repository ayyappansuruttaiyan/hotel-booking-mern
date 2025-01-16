import { constructFrom } from "date-fns";
import useFetch from "../hooks/useFetch";
import "./navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Navbar() {
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { username: "ayyappan1", password: "123456" },
        { withCredentials: true }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Happily</span>
        </Link>

        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
