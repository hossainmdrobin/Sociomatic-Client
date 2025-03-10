import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'

export default function PostNotes() {
    const [open, setOpen] = useState(true)
    const {register} = useFormContext()

    return (
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white transition'>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-between py-1 cursor-pointer'>
                <h2 className='font-bold'>Notes</h2>
                <FaChevronDown className='mr-2' />
            </div>
            <div className={`${open ? "" : "hidden"}`}>
                <textarea {...register('note')} className='w-full focus:outline-none mr-2 p-1 bg-gray-200 rounded' />
            </div>

        </fieldset>
    )
}
