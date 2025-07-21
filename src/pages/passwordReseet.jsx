import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../Authentication/userAuth";
import logo from "../assets/logo.png";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setEmailSent(true);
      setTimeout(() => {
        navigate('/login');
      }, 5000); // redirect after 5 seconds
    } catch {
      // error handled inside resetPassword function
    }
  };

  return (
    <div className="h-[100vh] login py-5 px-[8%]">
          <img src={logo} alt="logo" className="w-[150px] max-sm:w-[100px]" />
    <div className="max-w-[400px] m-auto mt-[100px] bg-[rgba(0,0,0,0.75)] px-5 rounded py-[30px]">
      <h2 className="text-white text-2xl mb-4">Reset Password</h2>
      {emailSent ? (
        <p className="text-green-400">
          Check your email for reset instructions. Redirecting to login page...
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[50px] bg-[#333] text-white my-[12px] rounded-sm px-5 py-4 outline-none "
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-red-600 text-white rounded cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ResetPassword;
