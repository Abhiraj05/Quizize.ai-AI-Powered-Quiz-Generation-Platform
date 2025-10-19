import React ,{useState} from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setloadervalue] = useState(false);
  const activateLoader = () => {
    setloadervalue(true);
    setTimeout(() => {
      setloadervalue(false);
      navigate("/signin");
    }, 1500);
  };
  return (
    <>
      {loading && <Loader/>}
      <main className="bg-gradient-to-br from-primary via-blue-600 to-accent grid place-items-center h-screen border">
        <div className=" bg-white text-center  pt-18 pb-18 pr-10 pl-10 rounded-2xl">
          <h3 className="capitalize text-[32px] mb-10 text-black font-bold">
            sign up
          </h3>
          <form action="#" className="text-center">
            <div>
              <input
                className="border w-90 h-14 mb-10 rounded-xl pl-5 placeholder:capitalize"
                type="text"
                placeholder="username"
              />
            </div>
            <div>
              <input
                className="border w-90 h-14 mb-10 rounded-xl pl-5 placeholder:capitalize"
                type="password"
                placeholder="password"
              />
            </div>
            <div>
              <input
                className="border w-90 h-14 mb-10 rounded-xl pl-5 placeholder:capitalize"
                type="password"
                placeholder="confirm password"
              />
            </div>
            <div>
              <button className="hover:bg-white hover:border-cyan-500 hover:border  hover:rounded-lg  hover:text-cyan-500 bg-accent bg-cyan-500 text-white font-semibold capitalize border pt-3 pb-3 px-35 rounded-xl text-lg">
                submit
              </button>
            </div>
            <div className="flex justify-center items-center gap-2 capitalize mt-4">
              <div>
                <p>already have an account ?</p>
              </div>
              <div>
                <button type="button" className="hover:text-cyan-500 capitalize text-blue-600"  onClick={activateLoader} >signin</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default SignUp;
