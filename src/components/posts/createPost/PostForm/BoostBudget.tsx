import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'


export default function BoostBudget() {
    const [open, setOpen] = useState(true)
    const {register} = useFormContext()
    return (
        <fieldset className='mt-4 shadow p-2 rounded-lg bg-white'>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-between py-1 cursor-pointer'>
                <h2 className='font-bold'>Post Budget</h2>
                <FaChevronDown className='mr-2' />
            </div>
            <div className={`${open ? "" : "hidden"} flex items-center justify-between`}>
                <input {...register("budget")} className='p-1 w-3/4 bg-gray-200 rounded focus:outline-none' type="number" />
                <select {...register("currency")} className='p-1 w-1/5 h-8 rounded bg-gray-200 focus:outline-none' >
                    <option value="dollar">Dollar</option>
                    <option value="euro">Euro</option>
                    <option value="bdt">BDT</option>
                </select>
            </div>
        </fieldset>
    )
}
