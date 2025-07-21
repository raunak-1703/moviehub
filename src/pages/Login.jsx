import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../Authentication/userAuth";
import loader from '../assets/netflix_spinner.gif'
const Login = () => {
  const [signstate, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [remember,setRemember] = useState(false);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const submitHandler = async (e,navigate)=>{
    e.preventDefault();
    setLoading(true)
    signstate==='Sign In'? await signin(email,Password,navigate,remember): await signup(email,Password,name,navigate,remember);
    setLoading(false);
  }
  return (
    loading? <div className="w-screen h-screen flex items-center justify-center">
      <img src={loader} alt="loading" className="w-15"/>
    </div>:
    <div className="h-[100vh] login py-5 px-[8%] max-sm:py-[15px] max-sm:px-[8%]">
      <img src={logo} alt="logo" className="w-[150px] max-sm:w-[100px]" />
      <div className="w-full max-w-[480px] bg-[rgba(0,0,0,0.75)] rounded-sm p-15 m-auto max-sm:p-[20px] max-sm:mt-[30px]">
        <h1 className="text-3xl font-semibold mb-7 max-sm:text-3xl">{signstate}</h1>
        <form onSubmit={(e) => submitHandler(e,navigate)}>
          {signstate === "Sign Up" && (
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full h-[50px] bg-[#333] text-white my-[12px] rounded-sm px-5 py-4 outline-none "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full h-[50px] bg-[#333] text-white my-[12px] rounded-sm px-5 py-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="password"
            className="w-full h-[50px] bg-[#333] text-white my-[12px] rounded-sm px-5 py-4 outline-none"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full p-4 text-center bg-[#e50914] text-white rounded-sm my-[12px] cursor-pointer">
            {signstate}
          </button>
          <div className="flex  items-center justify-between text-[#b3b3b3] text-[13px]">
            <div className="flex gap-1 cursor-pointer items-center">
              <input type="checkbox" id="remember" className="w-4 h-4" checked={remember} onChange={()=>setRemember(!remember)} />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="cursor-pointer">Need Help?</div>
          </div>
         {signstate==='Sign In' && <div className="underline text-center cursor-pointer mt-0.5" onClick={()=>navigate('/reset-password')}>Forgot Password?</div>} 
        </form>
        <div className="flex items-center justify-between mt-5 text-[#737373] text-[16px]">
          {signstate === "Sign In" ? (
            <>
              <p>New to Netflix?</p>
              <span
                className="cursor-pointer text-white font-semibold"
                onClick={() => setSignState("Sign Up")}
              >
                Sign Up Now
              </span>{" "}
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <span
                className="cursor-pointer  text-white"
                onClick={() => setSignState("Sign In")}
              >
                Sign In Now
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
