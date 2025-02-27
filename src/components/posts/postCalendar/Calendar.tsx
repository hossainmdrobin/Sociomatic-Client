"use client";
import { useState } from "react";
import { addMonths, subMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from "date-fns";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="w-full shadow-xl p-1 rounded-lg shadow-md bg-white">
      {/* Header */}
      <div className="w-[200px] flex justify-between items-center ml-2 mb-2">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="p-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          <IoIosArrowBack />
        </button>
        <h2 className=" text-sm font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="p-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-1 text-xs font-semibold text-gray-600">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-2">{day}</div>
        ))}
      </div>
      <hr />

      {/* Calendar Days */}
      <div className="grid grid-cols-7 text-xs">
        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => setSelectedDate(day)}
            className={`p-2 transition min-h-[80px] border-[1px] ${
              !isSameMonth(day, monthStart) ? "text-gray-400" : ""
            } ${
              isSameDay(day, selectedDate) ? "bg-indigo-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
}
