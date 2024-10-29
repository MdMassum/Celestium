import React, { useState } from "react";
import img1 from "../../assets/compatibility/img1.png";
import DatePicker from "../../components/DatePicker";
import TimePicker from "../../components/TimePicker";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Compatibility: React.FC = () => {
  // State management for Date of Birth (DOB)
  const [yourDOB, setYourDOB] = useState({ day: "", month: "", year: "" });
  const [partnerDOB, setPartnerDOB] = useState({ day: "", month: "", year: "" });

  // State management for Time of Birth
  const [yourTimeOfBirth, setYourTimeOfBirth] = useState({
    hour: "",
    minute: "",
    ampm: "AM",
  });
  const [partnerTimeOfBirth, setPartnerTimeOfBirth] = useState({
    hour: "",
    minute: "",
    ampm: "AM",
  });

  // State management for Place of Birth
  const [yourPlaceOfBirth, setYourPlaceOfBirth] = useState("");
  const [partnerPlaceOfBirth, setPartnerPlaceOfBirth] = useState("");

  const navigate = useNavigate();

  // Handlers for DatePicker
  const handleYourDOBChange = (date: { day: string | null; month: string | null; year: string | null }) => {
    setYourDOB({ day: date.day || "", month: date.month || "", year: date.year || "" });
  };

  const handlePartnerDOBChange = (date: { day: string | null; month: string | null; year: string | null }) => {
    setPartnerDOB({ day: date.day || "", month: date.month || "", year: date.year || "" });
  };

  // Handlers for TimePicker
  const handleYourTimeChange = (hour: string, minute: string, ampm: string) => {
    setYourTimeOfBirth({ hour, minute, ampm });
  };

  const handlePartnerTimeChange = (hour: string, minute: string, ampm: string) => {
    setPartnerTimeOfBirth({ hour, minute, ampm });
  };

  // Handlers for Place of Birth inputs
  const handleYourPlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYourPlaceOfBirth(e.target.value);
  };

  const handlePartnerPlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartnerPlaceOfBirth(e.target.value);
  };

  const handleClick = () => {

    // if (!yourDOB.day || !yourDOB.month || !yourDOB.year) {
    //     alert("Please fill out your complete Date of Birth.");
    //     return;
    //   }
    
    //   if (!partnerDOB.day || !partnerDOB.month || !partnerDOB.year) {
    //     alert("Please fill out your partner's complete Date of Birth.");
    //     return;
    //   }
    
    //   if (!yourTimeOfBirth.hour || !yourTimeOfBirth.minute || !yourTimeOfBirth.ampm) {
    //     alert("Please fill out your complete Time of Birth.");
    //     return;
    //   }
    
    //   if (!partnerTimeOfBirth.hour || !partnerTimeOfBirth.minute || !partnerTimeOfBirth.ampm) {
    //     alert("Please fill out your partner's complete Time of Birth.");
    //     return;
    //   }
    //   if(!yourPlaceOfBirth  || !partnerPlaceOfBirth){
    //     alert("Please fill out Place of Birth.");
    //     return;
    //   }

    console.log("Your Date of Birth:", yourDOB);
    console.log("Your Partner's Date of Birth:", partnerDOB);
    console.log("Your Time of Birth:", yourTimeOfBirth);
    console.log("Your Partner's Time of Birth:", partnerTimeOfBirth);
    console.log("Your Place of Birth:", yourPlaceOfBirth);
    console.log("Your Partner's Place of Birth:", partnerPlaceOfBirth);

    navigate('/features/compatibility2')
    
  };

  return (
    <div className="flex flex-col justify-between items-center gap-2 md:w-[80%] p-8 md:p-0 mx-auto mt-10 mb-10 text-lg md:tex-base">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="text-7xl font-robotoSerif text-[#FFD700] tracking-wider">Compatibility</h1>
          <p>
            In matters of the heart, the cosmos plays a significant role, guiding us towards those whose energies align with our own. ❤️
          </p>
          <div>
            <p>Check how compatible you are with your partner!</p>
            <p>It's Simple</p>
          </div>

          <p className="text-[#FFD700]">Fill in the details below:</p>
        </div>
        <img src={img1} alt="Compatibility illustration" className="h-48" />
      </div>

      {/* Date of birth picker */}
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full mt-12">
        <div>
          <p className="text-[#FFD700] text-xl font-medium mb-2">Your Date of Birth:</p>
          <DatePicker onChange={handleYourDOBChange} />
        </div>

        <div>
          <p className="text-[#FFD700] text-xl font-medium mb-2 mt-8 md:mt-0">Your Partner's Date of Birth:</p>
          <DatePicker onChange={handlePartnerDOBChange} />
        </div>
      </div>

      {/* Time of birth picker */}
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full mt-12">
        <div>
          <p className="text-[#FFD700] text-xl font-medium mb-2">Your Time of Birth:</p>
          <TimePicker onChange={handleYourTimeChange} />
        </div>

        <div>
          <p className="text-[#FFD700] text-xl font-medium mb-2 mt-8 md:mt-0">Your Partner's Time of Birth:</p>
          <TimePicker onChange={handlePartnerTimeChange} />
        </div>
      </div>

      {/* Place of birth input fields */}
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full mt-12">
        <div className="text-sm">
          <p className="text-[#FFD700] text-xl font-medium mb-2">Your Place of Birth:</p>
          <input
            required
            className="bg-white text-black min-w-80 min-h-10 py-1.5 px-2 rounded-md "
            value={yourPlaceOfBirth}
            onChange={handleYourPlaceChange}
            placeholder="Enter your place of birth"
          />
        </div>

        <div className="text-sm  ">
          <p className="text-[#FFD700] text-xl font-medium mb-2 mt-8 md:mt-0">Your Partner's Place of Birth:</p>
          <input
            className="bg-white text-black min-w-80 min-h-10 py-1.5 px-2 rounded-md"
            required
            value={partnerPlaceOfBirth}
            onChange={handlePartnerPlaceChange}
            placeholder="Enter partner's place of birth"
          />
        </div>
      </div>

      <Button onClick={handleClick} className="min-w-48 min-h-10 mt-20">
        Check Compatibility
      </Button>
    </div>
  );
};

export default Compatibility;
