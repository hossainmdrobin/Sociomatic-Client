"use client"
import { Switch } from '@mui/material';
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
import { BsEmojiSmile } from "react-icons/bs";
import { FaHashtag, FaLink, FaChevronDown } from "react-icons/fa";


export default function PostContent() {
    const { register } = useFormContext();
    const [open,setOpen] = useState(true)
    const [addComment, setAddComment] = useState(false)
    return (
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white'>
            <div onClick={()=>setOpen(!open)} className='flex items-center justify-between py-1 cursor-pointer'>
                <h2 className='font-bold'>Post Content</h2>
                <FaChevronDown className='mr-2' />
            </div>

            <div className={`${open? "":"hidden"}`}>
                <div className='text-sm flex justify-between px-1 my-1'>
                    <label className='' htmlFor="text">Post text</label>
                    <span>Translate Text</span>
                </div>
                <div className='border rounded-xl p-2 group'>
                    <textarea 
                    {...register('postText')} 
                    className='w-full p-1 focus:outline-none' 
                    rows={5} 
                    placeholder='Type here' />
                

                    <div className='flex items-center'>
                        <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'>AI content</span>
                        <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'><BsEmojiSmile /> </span>
                        <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'><FaHashtag /> </span>
                        <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'><FaLink /> </span>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='mb-2 mt-6'>Add first comment to the post <span className='text-sm p-1 bg-gray-200 rounded '>new</span></div>
                    <Switch checked={addComment} onChange={()=>setAddComment(!addComment)} />
                </div>

                {/* Comment area  */}
                <div className={`${addComment? "":"hidden"} border rounded-xl p-2 mb-4 group`}>
                    <textarea 
                    {...register('firstComment')} 
                    className='w-full p-1 focus:outline-none' 
                    rows={5} 
                    placeholder='Type here' />
                </div>
            </div>
        </fieldset>
    )
}
