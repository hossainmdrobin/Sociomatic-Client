import { showCancelUI } from '@/redux/slices/postComponentSlice';
import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { IoIosArrowForward } from "react-icons/io";



export default function PostFormHeader() {
    const dispatch = useDispatch()
    return (
        <div className='flex items-center justify-between p-3'>
            <div className='flex items-center'>
                <span>ID</span>
                <IoIosArrowForward />
                <span>Create Post</span>
            </div>
            <div
                className='px-2 cursor-pointer'
                onClick={() => dispatch(showCancelUI())}
            >
                <ImCancelCircle className='text-xl text-gray-500 hover:text-gray-600 transition' />
            </div>
        </div>
    )
}
