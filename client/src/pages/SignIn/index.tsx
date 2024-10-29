import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Starss from "../../components/starss";
import Button from "../../components/Button";
import Button2 from "../../components/Button2";
import Oauth from "../../components/Oauth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!email || !password) {
      alert("Login credentials cannot be empty");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/launch');

    // TODO: Add API call for authentication here
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto w-full lg:w-[80%] text-2xl md:text-base">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row w-full h-screen md:h-full items-center justify-between md:justify-end mt-10 md:mt-0">
        {/* Background Stars Animation */}
        <Starss className="absolute top-0 left-0 h-80" />

        {/* Sign In Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full px-12 rounded-lg shadow-lg">
            <h1 className="md:hidden font-astloch text-8xl text-center w-full mb-16 text-[#FFD700]">Celestium</h1>
            <h2 className="text-6xl md:text-5xl text-white text-center mb-10 md:mb-6 font-robotoSerif">Sign In</h2>

            {/* Google Sign-In */}
            <Oauth>Sign in with Google</Oauth>

            {/* Divider */}
            <div className="flex items-center justify-center mb-3 w-full md:min-w-80">
              <hr className="w-full border-gray-400" />
              <span className="px-4 text-gray-400">or</span>
              <hr className="w-full border-gray-400" />
            </div>

            {/* Email Input */}
            <div className="w-full mb-8 md:mb-3">
              <label htmlFor="email" className="block text-2xl md:text-sm font-medium text-white mb-1">Email-ID</label>
              <input
                required
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your Email-ID"
                className="min-w-80 w-full md:w-full min-h-14 md:min-h-10 px-4 py-2 bg-[#f5f5f5] text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6f6cfa] focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div className="w-full mb-3">
              <label htmlFor="password" className="block text-2xl md:text-sm font-medium text-white mb-1">Password</label>
              <input
                required
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                className="min-w-80 w-full md:w-full min-h-14 md:min-h-10 px-4 py-2 bg-[#f5f5f5] text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6f6cfa] focus:border-transparent"
              />
              <a href="#" className="text-[#FFD700] mt-2 block text-lg md:text-sm text-right">Forgot password?</a>
            </div>

            {/* Mobile-Only Buttons */}
            <div className="flex md:hidden  justify-between mt-12 mb-16">
              <div className="flex flex-col">
                {/* Log In Button */}
                <Button onClick={handleSubmit}>Log In</Button>
                {/* Sign Up Link */}
                <p className="text-left text-white text-xl md:text-base mt-2 mb-4">
                  Don't have an account?{" "}
                  <Link to="/signUp" className="text-[#FFD700] font-medium">Sign Up</Link>
                </p>
              </div>
              
              {/* Log In as Astrologer Button */}
              <Link to='/signIn_Astro'>
              <Button2 className="max-h-14">Log in as Astrologer</Button2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Only Bottom Section */}
      <div className="hidden md:flex w-full items-center justify-between mt-14 mx-auto">
        {/* Left Section (Astrologer Button) */}
        <Link to='/signIn_Astro' className="w-1/2 flex mx-24">
          <Button2>Log in as Astrologer</Button2>
        </Link>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          {/* Log In Button */}
          <Button onClick={handleSubmit}>Log In</Button>
          {/* Sign Up Link */}
          <p className="text-center text-white text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-[#FFD700] font-medium">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;