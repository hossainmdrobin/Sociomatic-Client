import React from 'react'
import PostContent from './PostContent'
import PostPlanning from './PostPlanning'
import BoostBudget from './BoostBudget'
import Label from './Label'
import PostNotes from './PostNotes'
import { useForm } from 'react-hook-form'


export default function PostForm() {
  const {
    register, handleSubmit, formState: { errors, isSubmitting }, reset, getValues
  } = useForm()
  return (
    <div className=''>
      <form action="">
        {/* Post content */}
        <PostContent {...{register}}/>

        {/* post planning */}
        <PostPlanning {...{register}}/>

        {/* Boost Budget */}
        <BoostBudget {...{register}}/>

        {/* Post Labels  */}
        <Label {...{register}}/>

        {/* Post Notes  */}
        <PostNotes {...{register}}/>
      </form>
    </div>
  )
}
