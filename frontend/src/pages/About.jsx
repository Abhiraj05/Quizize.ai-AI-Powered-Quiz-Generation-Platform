import React from "react";


const About=()=>{
    return(
        <>
        <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About AI Quiz Generator
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed">
          The <span className="font-semibold text-blue-600">AI Quiz Generator </span> 
           is an intelligent platform that allows users to effortlessly create quizzes 
          on any topic using the power of Artificial Intelligence. By leveraging 
          advanced natural language processing, the system automatically generates 
          well-structured and accurate questions, saving users time and effort.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed mt-4">
          Whether you’re a student preparing for exams, a teacher designing 
          assessments, or just someone who loves testing knowledge — this tool 
          helps you generate, customize, and take quizzes instantly. Simply enter 
          a topic or description, and let the AI do the rest!
        </p>
        <p className="text-md text-gray-600 max-w-2xl text-center mt-6 italic">
          Our goal is to make learning interactive, efficient, and fun — one quiz at a time.
        </p>
      </div>
        </>
    )
}
export default About;