"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ProfileDropdown from './profileDropdown/profileDropdown';


export default function Topbar() {
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className='py-2 pl-4 shadow-md flex items-center bg-white justify-between'>
      <div>
        <div
          className="relative"
        >
          <button
            className="flex items-center text-gray-600 hover:text-black transition -z-10"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Profile Selected <ChevronDown className="ml-1 w-4 h-4" />
          </button>

          <AnimatePresence>
            {openDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 left-0 mt-2 w-[600px] bg-white shadow-lg rounded-lg overflow-hidden z-50"
              >
                <ProfileDropdown />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>
        some buttons
      </div>
    </div>
  )
}
