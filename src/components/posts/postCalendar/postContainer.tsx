import React from 'react'
import { format, isSameMonth, isSameDay } from "date-fns";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { updateMode } from '@/redux/slices/postComponentSlice';
interface prop {
    day: Date,
    monthStart: Date,
    selectedDate: Date,
}


export default function PostContainer({ day, monthStart, selectedDate }: prop) {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className={`group relative transition min-h-[80px] border-[1px] `}>
            <div className='group-hover:flex hidden px-2 rounded w-full h-full items-center'>
                <div
                    onClick={()=> dispatch(updateMode({showPostForm:true,mode:'create'}))}
                    className='bg-cyan-300 cursor-pointer hover:bg-cyan-400 transition text-center text-white p-1 w-1/2 mx-2 rounded font-bold'>Post</div>
                <div className='bg-cyan-300 cursor-pointer hover:bg-cyan-400 transition text-center text-white p-1 w-1/2 mx-2 rounded font-bold'>Ins</div>
            </div>
            <span className={`absolute right-1 w-5 h-5 rounded-full top-1 flex items-center justify-center font-bold ${!isSameMonth(day, monthStart) ? "text-gray-400" : ""
                } ${isSameDay(day, selectedDate) ? "bg-indigo-500 text-white" : ""
                } `}>{format(day, "d")}</span>
        </div>
    )
}
