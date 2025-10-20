import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import image from "../assets/ChatGPT Image Oct 20, 2025, 05_36_34 PM.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [loading, setLoaderValue] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activateLoader = (path) => {
    setLoaderValue(true);
    setTimeout(() => {
      setLoaderValue(false);
      navigate(path);
      setMenuOpen(false); // Close menu after navigation
    }, 1500);
  };

  return (
    <>
      {loading && <Loader />}

      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate("/")}>
              <div className="rounded-lg flex items-center justify-around gap-2 hover:opacity-70">
                <img className="md:h-10 md:w-20 h-8 w-16" src={image} alt="" />
                 {/* <h1 className="text-[15px] md:text-xl font-bold text-gray-900 uppercase">
                  Quizify
              </h1> */}
              </div>
            </button>
          </div>

          <div className="md:hidden">
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              className="text-2xl text-gray-700 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <nav
            className={`${
              menuOpen
                ? "flex flex-col absolute  top-16 left-0 w-full bg-white shadow-md py-4 space-y-4 items-center"
                : "hidden"
            } md:flex md:space-x-8 md:static md:flex-row md:justify-center md:items-center md:space-y-0 md:bg-transparent md:shadow-none`}
          >
            <span
              className="hover:text-gray-600 hover:text-primary text-black cursor-pointer transition-colors"
              onClick={() => activateLoader("/contact")}
            >
              Contact
            </span>
            <span
              className="hover:text-gray-600 hover:text-primary text-black cursor-pointer transition-colors"
              onClick={() => activateLoader("/about")}
            >
              About
            </span>
            <button
              className="px-41 py-2 md:px-4 md:py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:border hover:bg-cyan-500 hover:rounded-lg hover-border hover:text-white transition-all"
              onClick={() => activateLoader("/signin")}
            >
              Sign In
            </button>
            <button
              className="px-40 py-2 md:px-4 md:py-2 bg-blue-700 text-white rounded-lg hover:border hover:text-cyan-500 hover:bg-white hover:border-cyan-500 hover:rounded-lg hover-border-black border transition-all"
              onClick={() => activateLoader("/signup")}
            >
              Sign Up
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
