import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


export default function Topbar() {
  return (
    <div className='py-2 pl-4 shadow-md flex items-center bg-white justify-between'>
      <div>
        <div className='flex items-center justify-between w-[250px] py-1 px-3 bg-gray-100 rounded cursor-pointer'>
          <Image src={'/globe.svg'} width={20} height={20} alt='Profile' />
          <span>Full Name</span>
          <IoIosArrowDown />
        </div>
      </div>
      <div>
        some buttons
      </div>
    </div>
  )
}
