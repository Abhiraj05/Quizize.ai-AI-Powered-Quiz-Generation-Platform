import React from "react";


const Footer=()=>{
    return (
        <>
        <footer id="footer" className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-6">
        <div className="md:flex sm:flex-wrap justify-around items-center  gap-50">
            <div>
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <i className="text-white" data-fa-i2svg=""><svg className="svg-inline--fa fa-brain" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"></path></svg></i>
                    </div>
                    <h3 className="text-lg font-bold">AI Quiz Generator</h3>
                </div>
                <p className="text-gray-400 text-sm">Create engaging quizzes instantly with the power of artificial intelligence.</p>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className=" text-sm text-gray-400 flex justify-between items-center gap-3">
                    <li><span className="hover:text-white transition-colors cursor-pointer">Contact</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">About</span></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 AI Quiz Generator. All rights reserved.</p>
        </div>
    </div>
</footer>
        </>
    )
}
export default Footer;