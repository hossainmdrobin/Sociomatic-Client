import React, { useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'

export default function Label({register}:{register:UseFormRegister<FieldValues>}) {
    const [open, setOpen] = useState(true)

    return (
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white transition'>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-between py-1 cursor-pointer'>
                <h2 className='font-bold'>Label</h2>
                <FaChevronDown className='mr-2' />
            </div>
            <div className={`${open ? "" : "hidden"}`}>
                <textarea className='w-full focus:outline-none mr-2 p-1 bg-gray-200 rounded' name="" id="" />
            </div>

        </fieldset>
    )
}
