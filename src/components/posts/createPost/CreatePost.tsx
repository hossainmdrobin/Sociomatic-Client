import { RootState } from '@/redux/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PostFormHeader from './CreatePostHeader'
import FormHeader from './PostForm/FormHeader'
import PostForm from './PostForm/PostForm'
import ViewMenu from './view/ViewMenu'
import PCView from './view/PCView'

export default function CreatePost() {
    const show = useSelector((state: RootState) => state.persistedReducer.post_component.showPostForm)
    console.log("show", show)
    const [isPC, setIsPC] = useState(true)
    return (
        <div className={`fixed top-0 left-0 rounded-end-xl h-screen bg-gray-100 w-[calc(theme(width.screen)-100px)] shadow-xl ${show ? "" : 'hidden'}`}>
            <div className=''>
                <div className='w-full'>
                    <PostFormHeader />
                </div>
                <div className='flex '>
                    <div className='w-1/2 flex flex-col items-center w-1/2 overflow-y-scroll'>
                        <ViewMenu {...{isPC,setIsPC}}/>
                        <PCView {...{isPC}} />
                    </div>
                    <div className='w-1/2 overflow-y-scroll h-[500px] p-3'>
                        <FormHeader />
                        <PostForm />
                    </div>
                </div>

            </div>
        </div>
    )
}
