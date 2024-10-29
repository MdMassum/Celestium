import React, { useState } from "react";

// Types for the component
type AmPm = "AM" | "PM";

interface TimePickerProps {
  onChange: (hour: string, minute: string, ampm: AmPm) => void; // Passes selected time to parent
}

// Enum to manage dropdown states
enum DropdownType {
  HOUR = "HOUR",
  MINUTE = "MINUTE",
  AMPM = "AMPM",
  NONE = "NONE",
}

const TimePicker: React.FC<TimePickerProps> = ({ onChange }) => {
  // State management for hour, minute, and AM/PM
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<string | null>(null);
  const [selectedAmPm, setSelectedAmPm] = useState<AmPm>("AM");

  // State for managing which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(DropdownType.NONE);

  // Arrays for hours, minutes, and AM/PM
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  const amPm: AmPm[] = ["AM", "PM"];

  // Handlers for selection
  const handleHourSelect = (hour: string) => {
    setSelectedHour(hour);
    setOpenDropdown(DropdownType.NONE);
    triggerOnChange(hour, selectedMinute, selectedAmPm); // Call onChange with updated hour
  };

  const handleMinuteSelect = (minute: string) => {
    setSelectedMinute(minute);
    setOpenDropdown(DropdownType.NONE);
    triggerOnChange(selectedHour, minute, selectedAmPm); // Call onChange with updated minute
  };

  const handleAmPmSelect = (period: AmPm) => {
    setSelectedAmPm(period);
    setOpenDropdown(DropdownType.NONE);
    triggerOnChange(selectedHour, selectedMinute, period); // Call onChange with updated AM/PM
  };

  // Trigger the onChange prop when a change occurs
  const triggerOnChange = (hour: string | null, minute: string | null, ampm: AmPm) => {
    if (hour && minute) {
      onChange(hour, minute, ampm); // Only pass the time when both hour and minute are selected
    }
  };

  return (
    <div className="flex space-x-4 py-1 text-sm">
      {/* Hour Picker */}
      <div className="text-center">
        <p className="mb-2 text-left px-2">Hour</p>
        <div className="relative">
          <button
            className={`w-24 py-2 rounded-md border ${
              selectedHour
                ? "bg-[#1E1428] text-[#FFD700] border-[#898989] shadow-[0_0_10px_2px_#3B6381]"
                : "bg-white text-black border-gray-400"
            }`}
            onClick={() =>
              setOpenDropdown(openDropdown === DropdownType.HOUR ? DropdownType.NONE : DropdownType.HOUR)
            }
          >
            {selectedHour ? selectedHour : <span className="text-xs">Select Hour</span>}
          </button>
          {openDropdown === DropdownType.HOUR && (
            <div className="absolute z-10 mt-1 w-24 bg-white text-black rounded-md scrollbar-hide overflow-y-auto max-h-40">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="py-1 px-3 hover:bg-gray-300 cursor-pointer"
                  onClick={() => handleHourSelect(hour)}
                >
                  {hour}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Minute Picker */}
      <div className="text-center">
        <p className="mb-2 text-left px-2">Mins</p>
        <div className="relative">
          <button
            className={`w-24 py-2 rounded-md border ${
              selectedMinute
                ? "bg-[#1E1428] text-[#FFD700] border-[#898989] shadow-[0_0_10px_2px_#3B6381]"
                : "bg-white text-black border-gray-400"
            }`}
            onClick={() =>
              setOpenDropdown(openDropdown === DropdownType.MINUTE ? DropdownType.NONE : DropdownType.MINUTE)
            }
          >
            {selectedMinute ? selectedMinute : <span className="text-xs">Select Minute</span>}
          </button>
          {openDropdown === DropdownType.MINUTE && (
            <div className="absolute z-10 mt-1 w-24 bg-white text-black rounded-md scrollbar-hide overflow-y-auto max-h-40">
              {minutes.map((minute) => (
                <div
                  key={minute}
                  className="py-1 px-3 hover:bg-gray-300 cursor-pointer"
                  onClick={() => handleMinuteSelect(minute)}
                >
                  {minute}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* AM/PM Picker */}
      <div className="text-center">
        <div className="relative">
          <button
            className={`w-24 py-2 rounded-md border mt-7 ${
              selectedAmPm
                ? "bg-[#1E1428] text-[#FFD700] border-[#898989] shadow-[0_0_10px_2px_#3B6381]"
                : "bg-white text-black border-gray-400"
            }`}
            onClick={() =>
              setOpenDropdown(openDropdown === DropdownType.AMPM ? DropdownType.NONE : DropdownType.AMPM)
            }
          >
            {selectedAmPm ? selectedAmPm : <span className="text-xs">Select AM/PM</span>}
          </button>
          {openDropdown === DropdownType.AMPM && (
            <div className="absolute z-10 mt-1 w-24 bg-white text-black rounded-md">
              {amPm.map((period) => (
                <div
                  key={period}
                  className="py-1 px-3 hover:bg-gray-300 cursor-pointer"
                  onClick={() => handleAmPmSelect(period)}
                >
                  {period}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
