import React, { useState } from 'react'
import { FieldValues, useFormContext, UseFormRegister } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'

export default function PostPlanning() {
    const {register} = useFormContext()
    const [open, setOpen] = useState(true)
    return (
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white'>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-between py-1 cursor-pointer'>
                <h2 className='font-bold'>Post Planning</h2>
                <FaChevronDown className='mr-2' />
            </div>
            <div className={`flex items-center justify-between ${open? "":"hidden"}`}>
                <input {...register("date")} className='w-full focus:outline-none mr-2 p-1 bg-gray-200 rounded' type="date" />
                <input {...register("time")} className='w-full focus:outline-none p-1 ml-2 bg-gray-200 rounded' type="time" />
            </div>
        </fieldset>
    )
}
