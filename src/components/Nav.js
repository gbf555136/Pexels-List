import React from "react";

const Nav = () => {
  return (
    <nav>
      <a href="https://www.pexels.com" className="logo" target="_blank">
        <img src="https://images.pexels.com/lib/api/pexels.png" alt="" />
      </a>
      <ul>
        <li>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="/videosPage">Videos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
