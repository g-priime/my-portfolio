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
            className="inflex-flex items-center py-6 pl-2 mr-0 text-yellow-400 
            hover:text-indigo-200 text-4xl font-bold cursive tracking-widest
            sm:px-3,mr-4
            md:px-5"
          >
            Levon
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center text-center py-3 px-1 my-6 rounded text-yellow-400 hover:text-indigo-200 sm:px-3"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center text-center py-3 px-1 my-6 rounded text-yellow-400 hover:text-indigo-200 sm:px-3"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center text-center py-3 px-1 my-6 rounded text-yellow-400 hover:text-indigo-200 sm:px-3"
          >
            About Me
          </NavLink>
        </nav>
        <div className="flex pl-5 sm:px-3">
          <div className="inline-flex py-3 px-0 my-6">
            <SocialIcon
              url="https://www.linkedin.com/in/levon-rose/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="inline-flex py-3 px-0 my-6">
            <SocialIcon
              url="https://github.com/g-priime"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              bgColor="#6e5494"
              style={{ height: 36, width: 36 }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
