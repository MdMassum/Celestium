import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Starss from "../../../components/starss";
import Button from "../../../components/Button";
import Button2 from "../../../components/Button2";

const SignupAstrologer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [experience, setExperience] = useState<string>("");
  const [certification, setCertification] = useState<File | null>(null);

  const navigate = useNavigate();

  // Handlers for the form fields
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => setAge(event.target.value);
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => setGender(event.target.value);
  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => setExperience(event.target.value);
  const handleCertificationChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCertification(event.target.files ? event.target.files[0] : null);

  const handleSkillToggle = (skill: string) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((item) => item !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // if (!email || !name || !age || !gender) {
    //   alert("All required fields must be filled");
    //   return;
    // }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Skills:", skills);
    console.log("Experience:", experience);
    console.log("Certification:", certification);
    navigate("/launchAstro");

    // TODO: Add API call for registration here
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto w-full lg:w-[80%] text-xl md:text-base">
      <div className="flex flex-col md:flex-row w-full h-screen md:h-full items-start justify-between md:justify-between">
        {/* Sign Up Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:justify-center">
          <div className="w-full px-12 rounded-lg shadow-lg">
            <h1 className="md:hidden font-astloch text-8xl text-center w-full mb-16 text-[#FFD700]">Celestium</h1>
            <h2 className="text-5xl md:text-4xl text-white text-center md:mt-12  mb-10 md:mb-6 font-robotoSerif">Welcome Astrologer</h2>

            {/* Full Name Input */}
            <div className="w-full mb-8 md:mb-2">
              <label htmlFor="name" className="block text-2xl md:text-sm font-medium text-white mb-1">Full Name</label>
              <input
                required
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your Name"
                className="min-w-80 w-full md:w-full min-h-14 md:min-h-10 px-4 py-1 bg-[#f5f5f5] text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6f6cfa] focus:border-transparent"
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
                className="min-w-80 w-full md:w-full min-h-14 md:min-h-10 px-4 py-1 bg-[#f5f5f5] text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6f6cfa] focus:border-transparent"
              />
            </div>

            <div className="flex w-full">

            {/* Age Input */}
            <div className="w-full mb-8">
              <label htmlFor="age" className="block text-2xl md:text-sm font-medium text-white mb-1">Age</label>
              <input
                required
                type="number"
                id="age"
                value={age}
                onChange={handleAgeChange}
                placeholder="age"
                className="w-20 px-4 py-1 bg-[#f5f5f5] text-slate-800 rounded-md"
              />
            </div>

            {/* Gender Selection */}
            <div className="w-full mb-8">
              <label className="block text-2xl md:text-sm  font-medium text-white mb-1">Gender</label>
              <div className="flex gap-4 text-[#FFD700]">
                <label>
                  <input
                    type="radio"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleGenderChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleGenderChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            </div>

            {/* Skills Selection */}
            <div className="w-full mb-8">
              <label className="block text-2xl md:text-sm  font-medium text-white mb-1">Skills</label>
              <div className="flex flex-wrap gap-2">
                {["Numerology", "Tarot", "Palmistry", "Psychic", "Psychologist", "Vedic", "Vastu", "Spiritual Counseling", "Astronomy", "Mediumship", "Energy Healing", "Dream Interpretation", "Face Reading", "Kundli Match", "Kundli", "Tarot Reading"].map(
                  (skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-4 md:px-3 py-2 md:py-1 rounded-md ${skills.includes(skill) ? "bg-[#FFD700] text-black" : "bg-white text-slate-800"} `}
                    >
                      + {skill}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="flex">
            {/* Experience Input */}
            <div className="w-1/2 mb-8">
              <label htmlFor="experience" className="block text-2xl md:text-sm  font-medium text-white mb-1">Experience in years</label>
              <input
                type="number"
                id="experience"
                value={experience}
                onChange={handleExperienceChange}
                placeholder="2"
                className="w-20 px-4 py-1 bg-[#f5f5f5] text-slate-800 rounded-md"
              />
            </div>

            {/* Certification Upload */}
            <div className="w-1/2 mb-8">
              <label htmlFor="certification" className="block text-2xl md:text-sm  font-medium text-white mb-1">Certification (if any)</label>
              <input
                type="file"
                id="certification"
                accept=".pdf"
                onChange={handleCertificationChange}
                className="min-w-40 w-full px-4 py-2 md:py-1 bg-[#f5f5f5] text-slate-800 rounded-md"
              />
            </div>
            </div>

            <div className="flex md:flex-col">
              <div className="w-1/2 flex flex-col text-lg md:text-base">
                {/* Sign Up Button */}
                <Button onClick={handleSubmit}>Sign Up</Button>
                {/* Sign In NavLink */}
                  <NavLink to="/signIn_Astro" className="text-left min-w-60 text-white mt-4 mb-10 md:mb-4">Already have an account? <span className="text-[#FFD700] font-medium">Sign In</span></NavLink>
                
              </div>
              <NavLink to='/signIn' className='w-1/2 flex md:hidden mb-10 h-14'>
                <Button2>Log In as User</Button2>
              </NavLink>
            </div>
            
          </div>

        </div>

        {/* Stars Section (Right Side for Desktop View) */}
        <div className="hidden md:flex flex-col w-full md:w-1/2 mt-36">
          <Starss className="absolute flex top-0 left-0 h-80 min-w-72" align="left-20" astrologer={true}/>
          <NavLink to='/signIn' className='flex mt-40 mx-auto pl-20'>
            <Button2>Log In as User</Button2>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default SignupAstrologer;
