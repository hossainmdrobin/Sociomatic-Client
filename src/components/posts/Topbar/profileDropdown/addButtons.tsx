import { Button } from '@mui/material'
import { CloudUploadIcon } from 'lucide-react'
import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { toggleAddProfile } from '@/redux/slices/layoutSlices/layoutSlice';



export default function AddButtons() {
    const dispatch = useDispatch();
    return (
        <div className='flex justify-between items-center p-4 border-t border-gray-800'>
            <Button
                onClick={()=> dispatch(toggleAddProfile())}  
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<IoMdAdd />}
            >
                Add Profile
            </Button>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<AiOutlineUsergroupAdd />}
            >
                Add Profile Groups
            </Button>
        </div>
    )
}
