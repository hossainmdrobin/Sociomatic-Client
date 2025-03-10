import React from 'react'
import PostContent from './PostContent'
import PostPlanning from './PostPlanning'
import BoostBudget from './BoostBudget'
import Label from './Label'
import PostNotes from './PostNotes'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@mui/material'


export default function PostForm() {

  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };
  
  return (
    <div className=''>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* Post content */}
          <PostContent />

          {/* post planning */}
          <PostPlanning />

          {/* Boost Budget */}
          <BoostBudget />

          {/* Post Labels  */}
          <Label  />

          {/* Post Notes  */}
          <PostNotes />
          <Button type='submit'>Submit</Button>
        </form>
      </FormProvider>

    </div>
  )
}
