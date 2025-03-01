import React from 'react'
import { CiText } from "react-icons/ci";
import { FaPhotoVideo,FaVideo,FaLink } from "react-icons/fa";




export default function FormHeader() {
  return (
    <div className='flex justify-between items-center h-8 bg-gray-200 rounded'>
      <div className='flex justify-center items-center rounded bg-gray-200  w-1/4 h-8 hover:bg-gray-300'>
        <CiText  className='mr-1'/>
        status
      </div>
      <div className='flex justify-center items-center rounded bg-gray-200  w-1/4 h-8 hover:bg-gray-300'>
        <FaPhotoVideo  className='mr-1'/>
        Photo/Gallery
        </div>
      <div className='flex justify-center items-center rounded bg-gray-200  w-1/4 h-8 hover:bg-gray-300'>
        <FaVideo className='mr-1'/>
        Video
        </div>
      <div className='flex justify-center items-center rounded bg-gray-200  w-1/4 h-8 hover:bg-gray-300'>
        <FaLink  className='mr-1'/>
        Link
        </div>
    </div>
  )
}
