"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ProfileDropdown from './profileDropdown/profileDropdown';
import { useGetUserInfoQuery } from '@/redux/slices/authApiSlices/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setActiveAccount, setAllAccounts } from '@/redux/slices/accountsSlices/accountSlice';
import Image from 'next/image';

// Define Account type if not imported from elsewhere
type Account = {
  _id: string;
  // add other properties if needed
};


export default function Topbar() {
  const [openDropdown, setOpenDropdown] = useState(false)
  const { data, isLoading, error } = useGetUserInfoQuery()
  const activeAccount = useSelector((state: RootState) => state.persistedReducer.accounts.activeAccount)
  const dispatch = useDispatch();
  console.log(activeAccount,data, "activeAccount");

  useEffect(() => {
    if (data) {
      dispatch(setAllAccounts(data.data.accounts));
      const accountIds: string[] = data.data.accounts.map((item: Account) => item._id)
      if(!activeAccount || !accountIds.includes(activeAccount._id)) dispatch(setActiveAccount(data.data.accounts[0]));
    }
  }, [data])
  return (
    <div className='fixed z-10 top-0 left-0 right-0 py-3 pl-14 shadow-md flex items-center bg-white justify-between'>
      <div>
        <div
          className="relative"
        >
          <button
            className="flex items-center text-gray-600 hover:text-black transition"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <Image src={activeAccount?.photo || ""} width={25}  height={30} alt='image' />
             <span className='text-sm ml-2'>{activeAccount?.name}</span> <ChevronDown className="ml-1 w-4 h-4" />
          </button>

          <AnimatePresence>
            {openDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 left-0 mt-2 w-[600px] bg-white shadow-lg rounded-lg overflow-hidden z-10"
              >
                <ProfileDropdown />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>
        some buttons
      </div>
    </div>
  )
}
