import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";

function App() {


  return (
    <>
    <NavBar></NavBar>
    <MainContent></MainContent>
    <Footer></Footer>
    </>
  );
}

export default App;
