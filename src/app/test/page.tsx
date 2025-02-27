"use client";
import { useState } from "react";
import { addMonths, subMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronLeft />
        </button>
        <h2 className="text-lg font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-1 text-center font-semibold text-gray-600">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-2">{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(day)}
            className={`p-2 rounded-lg transition ${
              !isSameMonth(day, monthStart) ? "text-gray-400" : ""
            } ${
              isSameDay(day, selectedDate) ? "bg-indigo-500 text-white" : "hover:bg-gray-200"
            }`}
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
    </div>
  );
}
