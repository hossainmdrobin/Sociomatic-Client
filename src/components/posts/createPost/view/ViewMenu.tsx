import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";



export default function ViewMenu({ isPC, setIsPC }: { isPC: boolean, setIsPC: (x:boolean) => void }) {
  return (
    <div className='flex items-center justify-center bg-gray-300 h-7 w-16 rounded-lg mb-3'>
      <div
        onClick={() => setIsPC(false)}
        className={`w-8 h-7 flex justify-center items-center rounded-lg ${isPC ? "" : "bg-cyan-400"}`}>
        <FaMobileAlt />
      </div>
      <div
        onClick={() => setIsPC(true)}

        className={`w-8 h-7 flex justify-center items-center rounded-lg ${!isPC ? "" : "bg-cyan-400"}`}>
        <MdLaptopChromebook />
      </div>
    </div>
  )
}
