import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons'

interface props {
  title: string,
  tabs: {
    name: string,
    icon: IconType,
    link: string
  }[]
}
interface IconButtonProps {
  icon: IconType; // Expecting an icon component
}
const IconButton: React.FC<IconButtonProps> = ({ icon: Icon }) => {
  return (
    <button>
      <Icon className="w-5 h-5" /> {/* Using the icon component */}
    </button>
  );
};

export default function Dropdown({ title, tabs }: props) {
  return (
    <div className='fixed z-50 left-[40px] text-white top-0 pl-2 h-screen w-[200px] bg-cyan-400 shadow-xl'>
      <h3 className='font-bold mt-4 mb-1'>{title}</h3>
      <hr />
      {
        tabs.map(tab => (
          <Link key={tab.name} href={tab.link}>
            <div className='flex items-center py-2 '>
              <IconButton icon={tab.icon} />
              <span className='ml-2'>{tab.name}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
