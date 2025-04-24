import Calendar from '@/components/posts/postCalendar/Calendar'
import Topbar from '@/components/posts/Topbar/Topbar'
import React from 'react'
import { MdOutlineFeaturedPlayList } from "react-icons/md";

export default function postCalendar() {
    return (
        <div className='ml-[40px] bg-gray-50'>
            <div className='my-2 ml-4 text-sm flex items-center'>
                <div className='mr-3 p-2 bg-gray-100 hover:bg-gray-200 transition rounded cursor-pointer'>
                    <MdOutlineFeaturedPlayList />
                </div>
                <div className='bg-gray-100 hover:bg-gray-200 transition mx-3 py-1 px-2 rounded cursor-pointer'>
                    <span>Ideas</span>
                    <span className='p-1 bg-yellow-400 rounded-lg text-xs text-white ml-2'>99</span>
                </div>
                <div className='bg-gray-100 hover:bg-gray-200 transition mx-3 py-1 px-2 rounded cursor-pointer'>
                    <span>Show demo content</span>
                </div>
            </div>

            <div className='flex px-2'>
                <div className='w-1/4 p-1 rounded-lg'>
                    <div className='bg-white shadow-lg rounded-lg p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim quasi accusamus aperiam maiores distinctio consectetur consequuntur, nulla error asperiores ipsam rerum, assumenda, itaque praesentium dolore numquam voluptate quidem aliquam? Dolores aut repudiandae quas placeat numquam deserunt exercitationem tempore sit cupiditate sed blanditiis perspiciatis hic eum ipsam mollitia consectetur nulla earum vitae nihil illo dolor facilis, asperiores accusamus vero. Recusandae.
                    </div>
                </div>
                <div className='w-3/4 p-1'>
                    <Calendar />
                </div>
            </div>


        </div>
    )
}
