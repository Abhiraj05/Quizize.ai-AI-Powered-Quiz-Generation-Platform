import { useEffect, useState } from "react";
import Home from "./pages/Home"
import InputBox from "./pages/InputBox";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
    <Router>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/generatequiz" element={<InputBox/>} />
           <Route path="/signin" element={<SignIn/>} />
           <Route path="/signup" element={<SignUp/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
