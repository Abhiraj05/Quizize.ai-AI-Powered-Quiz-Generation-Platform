import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhone,faLocationDot} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <>
      <NavBar></NavBar>
      <main className="bg-gradient-to-br from-primary via-blue-600 to-accent grid place-items-center h-screen border">
        <div className=" text-center   flex justify-between items-center space-x-32 px-10">
          <div className="text-left text-white max-w-md">
            <h1 className="text-4xl font-extrabold mb-5">Get in Touch</h1>
            <p className="text-lg leading-relaxed mb-8">
              Have questions, feedback, or partnership ideas?  
              We’d love to hear from you! Fill out the form or reach us directly through the details below.
            </p>

            <div className="space-y-5 text-[18px]">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
                <span>support@aiquizgen.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-white text-xl" />
                <span>Goa, India</span>
              </div>
            </div>
          </div>
          <div className="bg-white pt-12 pb-10 pr-8 pl-8 rounded-2xl">
            <form action="#" className="text-center">
              <div>
                <input
                  className="border  border-gray-500 w-80 h-12 mb-10 rounded-xl pl-5 placeholder:capitalize"
                  type="text"
                  placeholder="your name"
                />
              </div>
              <div>
                <input
                  className="border  border-gray-500 w-80 h-12 mb-10 rounded-xl pl-5 placeholder:capitalize"
                  type="email"
                  placeholder="your email"
                />
              </div>
              <div>
                <textarea
                  className="mb-10 w-80 h-35 p-4 border  border-gray-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none placeholder:capitalize "
                  placeholder="your message"
                ></textarea>
              </div>
              <div>
                <button className="hover:bg-white hover:border-cyan-500 hover:border  hover:rounded-lg  hover:text-cyan-500 bg-accent bg-cyan-500 text-white font-semibold capitalize border pt-2 pb-2 px-30 rounded-xl text-[17px] ">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
export default Contact;
