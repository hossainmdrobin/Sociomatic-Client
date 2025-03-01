import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { FaHashtag, FaLink } from "react-icons/fa";


export default function PostForm() {
  return (
    <div className=''>
      <form action="">
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white'>
          <h2 className='font-bold'>Post Content</h2>
          <div className='text-sm flex justify-between px-1 my-1'>
            <label className='' htmlFor="text">Post text</label>
            <span>Translate Text</span>
          </div>
          <div className='border rounded-xl p-2 group'>
            <textarea className='w-full p-1 focus:outline-none' rows={5} name="" id="text" placeholder='Type here'></textarea>
            <div className='flex items-center'>
              <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'>AI content</span>
              <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'><BsEmojiSmile /> </span>
              <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'><FaHashtag /> </span>
              <span className='mx-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 h-7 flex justify-center items-center'><FaLink /> </span>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='my-2'>Add first comment to the post <small>new</small></div>
            <button>button</button>
          </div>
        </fieldset>

        {/* post planning */}
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white'>
          <h2 className='font-bold'>Post planning</h2>
          <div className="flex items-center justify-between">
            <input className='w-full mr-2 p-1 bg-gray-200 rounded' type="date" name="" id="" />
            <input className='w-full p-1 ml-2 bg-gray-200 rounded' type="time" name="" id="" />
          </div>
        </fieldset>

        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white'>
          <h2 className='font-blold'>Boost budget</h2>
          <input className='p-1 w-3/4 rounded bg-gray-200' type="number" name="" id="" />
          <select className='p-1 w-1/4 rounded bg-gray-200' name="" id="">
            <option value="$">$</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Label</legend>
          <input type="text" name="" id="" />
        </fieldset>
        <fieldset>
          <legend>Notes</legend>
          <input type="text" />

        </fieldset>
      </form>
    </div>
  )
}
