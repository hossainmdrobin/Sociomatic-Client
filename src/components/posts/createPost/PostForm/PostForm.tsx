import React from 'react'
import PostContent from './PostContent'
import PostPlanning from './PostPlanning'
import BoostBudget from './BoostBudget'
import Label from './Label'
import PostNotes from './PostNotes'


export default function PostForm() {
  return (
    <div className=''>
      <form action="">
        {/* Post content */}
        <PostContent />
        
        {/* post planning */}
        <PostPlanning />

        {/* Boost Budget */}
        <BoostBudget />

        {/* Post Labels  */}
        <Label />

        {/* Post Notes  */}
        <PostNotes />
      </form>
    </div>
  )
}
