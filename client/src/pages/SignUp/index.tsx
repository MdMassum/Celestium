import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Starss from "../../components/starss";
import Button from "../../components/Button";
import Button2 from "../../components/Button2";
import Oauth from "../../components/Oauth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password || !name) {
      alert("Sign-up details cannot be empty");
      return;
    }

    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Password:", password);
    navigate("/launch");

    // TODO: Add API call for registration here
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  mx-auto w-full lg:w-[80%] text-2xl md:text-base">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row w-full h-screen md:h-full items-center justify-between md:justify-between mt-10 md:mt-0">
        
        {/* Sign Up Form Section (Left Side for Desktop View) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:justify-center">
          <div className="w-full px-12 rounded-lg shadow-lg">
            <h1 className="md:hidden font-astloch text-8xl text-center w-full mb-16 text-[#FFD700]">Celestium</h1>
            <h2 className="text-6xl md:text-5xl text-white text-center mb-10 md:mb-6 font-robotoSerif">Sign Up</h2>

            {/* Google Sign-In */}
            <Oauth>Sign up with Google</Oauth>

            {/* Divider */}
            <div className="flex items-center justify-center mb-1 w-full md:min-w-80">
              <hr className="w-full border-gray-400" />
              <span className="px-4 text-gray-400">or</span>
              <hr className="w-full border-gray-400" />
            </div>

            {/* Name Input */}
            <div className="w-full mb-8 md:mb-2">
              <label htmlFor="name" className="block text-2xl md:text-sm font-medium text-white mb-1">Name</label>
              <input
                required
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your Name"
                className="min-w-80 w-full md:w-full min-h-14 md:min-h-10 px-4 py-2 bg-[#f5f5f5] text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6f6cfa] focus:border-transparent"
              />
            </div>

            {/* Email Input */}
            <div className="w-full mb-8 md:mb-2">
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
            </div>

            {/* Mobile-Only Buttons */}
            <div className="flex md:hidden justify-between mt-12 mb-16">
              <div className="flex flex-col">
                {/* Sign Up Button */}
                <Button onClick={handleSubmit}>Sign Up</Button>
                {/* Sign In Link */}
                <p className="text-left text-white text-lg mt-2 mb-4">
                  Already have an account?{" "}
                  <NavLink to="/signIn" className="text-[#FFD700] font-medium">Sign In</NavLink>
                </p>
              </div>

              {/* Log In as Astrologer Button */}
              <NavLink to='/signUp_Astro'>
                <Button2 className="max-h-14">Log in as Astrologer</Button2>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Stars Section (Right Side for Desktop View) */}
        <div className="hidden md:block w-full md:w-1/2">
        <Starss className="absolute top-0 left-0 h-80 min-w-72" align="left-20"/>
        </div>
      </div>

      {/* Desktop Only Bottom Section */}
      <div className="hidden md:flex w-full items-center justify-between mt-6 mx-auto">
        {/* Left Section (Astrologer Button) */}

        <div className="w-1/2 flex flex-col justify-center items-center">
          {/* Sign Up Button */}
          <Button onClick={handleSubmit}>Sign Up</Button>
          {/* Sign In Link */}
          <p className="text-center text-white text-sm mt-4">
            Already have an account?{" "}
            <NavLink to="/signIn" className="text-[#FFD700] font-medium">Sign In</NavLink>
          </p>
        </div>

        {/* Right Section */}
        <NavLink to='/signUp_Astro' className="flex lg:mx-28 md:20 items-center">
          <Button2 className="">Log in as Astrologer</Button2>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
