import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <a
        href="https://www.pexels.com"
        className="logo"
        target="_blank"
        rel="noreferrer"
      >
        <img src="https://images.pexels.com/lib/api/pexels.png" alt="" />
      </a>
      <ul>
        <li>
          {/* <Link to="/">Homepage</Link> */}
          <a href="/">Homepage</a>
        </li>
        <li>
          <Link to="/videosPage">Videos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
