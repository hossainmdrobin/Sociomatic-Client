import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function Common() {
    const {register} = useFormContext()
  return (
    <div>
        <input type="text" {...register('robin')} />
    </div>
  )
}
