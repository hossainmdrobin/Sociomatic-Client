import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import PostFormHeader from './PostFormHeader'

export default function CreatePost() {
    const show = useSelector((state: RootState) => state.post_component.showPostForm)
    return (
        <div className={`fixed top-0 left-0 bg-white rounded-end-xl h-screen bg-gray-200 w-[calc(theme(width.screen)-200px)] shadow-xl ${show ? "" : 'hidden'}`}>
            <div className='bg-white'>
                <div className='w-full'>
                    <PostFormHeader />
                </div>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col items-center w-1/2 overflow-y-scroll'>
                        <div>
                            <span>pc</span>
                            <span>mobile</span>
                        </div>
                        <div>
                            Views Component
                        </div>
                    </div>
                    <div className='w-1/2 overflow-y-scroll'>

                    </div>
                </div>
            </div>
        </div>
    )
}
