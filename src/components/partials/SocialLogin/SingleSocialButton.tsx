import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { openFacebookPop, openInstagramPop, openLinkedInPop, openTiktokPop, openXPop } from '@/redux/slices/layoutSlices/layoutSlice';

export default function SingleSocialButton({ name, icon, feature }: { name: string, icon: string, feature: string }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        console.log(name);
        if(name === 'Facebook') dispatch(openFacebookPop());
        else if(name === 'Instragram') dispatch(openInstagramPop());
        else if(name === 'Tiktok') dispatch(openTiktokPop());
        else if(name === 'LinkedIn') dispatch(openLinkedInPop());
        else if(name === 'X') dispatch(openXPop());
        else if(name === 'Pinterest') dispatch(openInstagramPop());
    }
    return (
        <div className=' transition border-[1px] group relative rounded-md hover:border-[#1976d2] px-2 py-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200'>
            <Image className='transition group-hover:hidden' src={icon} width={40} height={40} alt="Description of the image" />
            <p className='transition group-hover:hidden font-bold py-2'>{name}</p>
            <p className='transition group-hover:hidden text-xs text-gray-600 text-center'>{feature}</p>
            <div className='transition absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block hidden flex justify-center'>
                <Button onClick={handleClick} variant='contained' size="small">Connect</Button>
            </div>
        </div>
    )
}
