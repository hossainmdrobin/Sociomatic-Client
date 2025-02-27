import React from 'react'
import { MdOutlineSpaceDashboard, MdAutoGraph } from "react-icons/md";
import { BsFilePostFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import Dropdown from './Dropdown';
import {postsProps} from './sidebarProps'
import Link from 'next/link';
export default function AppSideBar() {
  return (
    <div className=''>
      <div className='h-screen py-4 bg-indigo-500 w-[40px] fixed flex flex-col justify-between items-center '>
        <div>
          <div><MdAutoGraph className='text-3xl text-white' /></div>
          <div className='group ml-[2px] hover:bg-cyan-400 cursor-pointer rounded-s py-3 px-2 w-[38px]'>
            <Link href={"/app/dashboard"}><MdOutlineSpaceDashboard className='text-2xl text-white'/></Link>
          </div>
          <div className='group ml-[2px] hover:bg-cyan-400 cursor-pointer rounded-s py-3 px-2 w-[38px]'>
            <Link href={'/app/posts'}><BsFilePostFill className='text-2xl text-white'/></Link>
            <div className='hidden transition group-hover:block'><Dropdown {...postsProps}/></div>
          </div>
        </div>
        <div className=''>
          <IoMdSettings />
        </div>
      </div>
    </div>
  )
}
