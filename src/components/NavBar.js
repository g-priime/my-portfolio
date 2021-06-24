import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-yellow-400 hover:text-indigo-200 text-4xl font-bold cursive tracking-widest"
          >
            Levon
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-indigo-200"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-indigo-200"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-400 hover:text-indigo-200"
          >
            About Me
          </NavLink>
        </nav>
        <div>
          <div className="inline-flex py-3 px-0 my-6">
            <SocialIcon
              url="https://www.linkedin.com/in/levon-rose/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon
              url="https://www.linkedin.com/in/levon-rose/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
