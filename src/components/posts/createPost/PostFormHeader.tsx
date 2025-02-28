import React from 'react'
import { ImCancelCircle } from "react-icons/im";


export default function PostFormHeader() {
  return (
    <div className='flex items-center justify-between p-3'>
        <div>
            <span>ID</span>
            <span>Create Post</span>
        </div>
        <div
         className='px-2'

        >
            <ImCancelCircle className='text-xl text-gray-500 hover:text-gray-600 transition' />
        </div>
    </div>
  )
}
