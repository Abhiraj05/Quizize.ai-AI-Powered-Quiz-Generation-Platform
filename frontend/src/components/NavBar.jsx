import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import Loader from "./Loader";

const NavBar = () => {
   const navigate = useNavigate();
    const [loading, setloadervalue] = useState(false);
    const activateLoaderone = () => {
      setloadervalue(true);
      setTimeout(() => {
        setloadervalue(false);
        navigate("/signin");
      }, 1500);
    };

    const activateLoadertwo = () => {
      setloadervalue(true);
      setTimeout(() => {
        setloadervalue(false);
        navigate("/signup");
      }, 1500);
    };

       const activateLoaderthree = () => {
      setloadervalue(true);
      setTimeout(() => {
        setloadervalue(false);
        navigate("/contact");
      }, 1500);
    };

       const activateLoaderfour = () => {
      setloadervalue(true);
      setTimeout(() => {
        setloadervalue(false);
        navigate("/about");
      }, 1500);
    };
  return (
    <> 
      {loading && <Loader/>}
      <header
        id="header"
        className="bg-white shadow-sm border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faBrain} className="mr-2" />
            </div>
            <h1 className="md:text-xl text-lg font-bold text-gray-900 hover:text-gray-500">
             <button onClick={()=>navigate("/")}>AI Quiz Generator</button> 
            </h1>
          </div>
          <nav className="flex items-center space-x-8">
            <span className="text-gray-600 hover:text-primary hover:text-black transition-colors cursor-pointer" onClick={activateLoaderthree}>
              Contact
            </span>
            <span className="text-gray-600 hover:text-primary hover:text-black  transition-colors cursor-pointer" onClick={activateLoaderfour}>
              About
            </span>
            <button className="px-4 py-2 text-primary border border-primary rounded-lg bg-primary hover:border hover:bg-cyan-500 hover:rounded-lg hover-border hover:text-white  transition-all" onClick={activateLoaderone}>
              Sign In
            </button>
            <button className="px-4 py-2 bg-primary border text-white rounded-lg bg-blue-700 hover:border hover:text-cyan-500 hover:bg-white hover:border-cyan-500 hover:rounded-lg hover-border-black transition-colors" onClick={activateLoadertwo}>
              Sign Up
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
