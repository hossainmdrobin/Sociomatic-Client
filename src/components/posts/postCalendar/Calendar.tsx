"use client";
import { useState } from "react";
import { addMonths, subMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from "date-fns";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import PostContainer from "./postContainer";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="w-full shadow-xl p-2 rounded-lg shadow-md bg-white">
      {/* Header */}
      <div className="w-[200px] flex justify-between items-center mt-4 ml-2 mb-2">
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
          <PostContainer key={index} {...{day,monthStart,setSelectedDate, selectedDate}} />
        ))}
        
      </div>
    </div>
  );
}
