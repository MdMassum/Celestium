import React, { useState, useEffect } from "react";

// Types for the component
type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

interface DatePickerProps {
  onChange: (date: { day: string | null; month: Month | null; year: string | null }) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onChange }) => {
  // State management for day, month, and year
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<Month | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const [dayDropdown, setDayDropdown] = useState(false);
  const [monthDropdown, setMonthDropdown] = useState(false);
  const [yearDropdown, setYearDropdown] = useState(false);

  // Arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const months: Month[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 100 }, (_, i) => String(2023 - i));

  // Handlers for selection, closing other dropdowns
  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
    setDayDropdown(false);
  };

  const handleMonthSelect = (month: Month) => {
    setSelectedMonth(month);
    setMonthDropdown(false);
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    setYearDropdown(false);
  };

  // Close other dropdowns when one is opened
  const toggleDayDropdown = () => {
    setDayDropdown((prev) => !prev);
    setMonthDropdown(false);
    setYearDropdown(false);
  };

  const toggleMonthDropdown = () => {
    setMonthDropdown((prev) => !prev);
    setDayDropdown(false);
    setYearDropdown(false);
  };

  const toggleYearDropdown = () => {
    setYearDropdown((prev) => !prev);
    setDayDropdown(false);
    setMonthDropdown(false);
  };

  // Notify parent component when the selected date changes
  useEffect(() => {
    onChange({ day: selectedDay, month: selectedMonth, year: selectedYear });
  }, [selectedDay, selectedMonth, selectedYear]);

  return (
    <div className="flex space-x-4 py-1 text-lg md:text-base">
      {/* Day Picker */}
      <div className="text-center">
        <p className="mb-2 text-left px-2">Day</p>
        <div className="relative">
          <button
            className={`w-24 py-2 rounded-md border ${
              selectedDay
                ? "bg-[#1E1428] text-[#FFD700] border-[#898989] shadow-[0_0_10px_2px_#3B6381]"
                : "bg-white text-black border-gray-400"
            }`}
            onClick={toggleDayDropdown}
          >
            {selectedDay ? selectedDay : <span className="text-sm md:text-xs">Select Day</span>}
          </button>
          {dayDropdown && (
            <div className="absolute z-10 mt-1 w-24 bg-white text-black rounded-md scrollbar-hide overflow-y-auto max-h-40">
              {days.map((day) => (
                <div
                  key={day}
                  className="py-1 px-3 hover:bg-gray-300 cursor-pointer"
                  onClick={() => handleDaySelect(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Month Picker */}
      <div className="text-center">
        <p className="mb-2 text-left px-2">Month</p>
        <div className="relative">
          <button
            className={`w-24 py-2 rounded-md border ${
              selectedMonth
                ? "bg-[#1E1428] text-[#FFD700] border-[#898989] shadow-[0_0_10px_2px_#3B6381]"
                : "bg-white text-black border-gray-400"
            }`}
            onClick={toggleMonthDropdown}
          >
            {selectedMonth ? selectedMonth : <span className="text-xs">Select Month</span>}
          </button>
          {monthDropdown && (
            <div className="absolute z-10 mt-1 w-24 bg-white text-black rounded-md scrollbar-hide overflow-y-auto max-h-40">
              {months.map((month) => (
                <div
                  key={month}
                  className="py-1 px-3 hover:bg-gray-300 cursor-pointer"
                  onClick={() => handleMonthSelect(month)}
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Year Picker */}
      <div className="text-center">
        <p className="mb-2 text-left px-2">Year</p>
        <div className="relative">
          <button
            className={`w-24 py-2 rounded-md border ${
              selectedYear
                ? "bg-[#1E1428] text-[#FFD700] border-[#898989] shadow-[0_0_10px_2px_#3B6381]"
                : "bg-white text-black border-gray-400"
            }`}
            onClick={toggleYearDropdown}
          >
            {selectedYear ? selectedYear : <span className="text-xs">Select Year</span>}
          </button>
          {yearDropdown && (
            <div className="absolute z-10 mt-1 w-24 bg-white text-black rounded-md scrollbar-hide overflow-y-auto max-h-40">
              {years.map((year) => (
                <div
                  key={year}
                  className="py-1 px-3 hover:bg-gray-300 cursor-pointer"
                  onClick={() => handleYearSelect(year)}
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
