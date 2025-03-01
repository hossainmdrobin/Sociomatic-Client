import Image from 'next/image'
import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";


export default function PCView({isPC}:{isPC:boolean}) {
  if(!isPC) return <div>Mobile</div>

  return (
    <div className='bg-white max-h-[400px] w-4/5 p-3 rounded-lg shadow-lg'>
      <div className='flex'>
        <Image src={''} alt='profile photo' width={20} height={20} />
        <div>
          <div>Md Robin Hossain</div>
          <div className='flex items-center'>
            <span className='text-sm mr-2'>12.3.2025</span>
            <FaGlobeAmericas />
          </div>
        </div>
      </div>
      <div>This is Text section of my post</div>
      <div className='flex justify-between'>
        <div>like</div>
        <div className='text-sm'>100 comments</div>
      </div>
      <hr />
      <div className='flex items-center justify-between my-2 text-sm'>
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>

      </div>
    </div>
  )
}
