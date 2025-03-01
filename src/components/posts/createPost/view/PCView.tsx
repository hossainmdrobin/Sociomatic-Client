import Image from 'next/image'
import React from 'react'

export default function PCView({isPC}:{isPC:boolean}) {
  if(!isPC) return <div>Mobile</div>

  return (
    <div>
      <div>
        <Image src={'/'} alt='profile photo' />
      </div>
      <div></div>
      <div></div>
      <hr />
      <div></div>
    </div>
  )
}
