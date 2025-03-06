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

  const onSubmit = (data:any) => console.log(data)
  console.log(getValues())


  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Post content */}
        <PostContent {...{ register }} />

        {/* post planning */}
        <PostPlanning {...{ register }} />

        {/* Boost Budget */}
        <BoostBudget {...{ register }} />

        {/* Post Labels  */}
        <Label {...{ register }} />

        {/* Post Notes  */}
        <PostNotes {...{ register }} />
        <input {...register('mello')} />
        <button>Submit</button>
      </form>
    </div>
  )
}
