'use client';

import { useState, useRef } from 'react';
import { TiTick } from "react-icons/ti";


const OtpInput = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // only digits

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        handleChange('', index);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (<>
    <div className='h-screen w-screen fixed bg-black opacity-30'></div>
    <div className='fixed pb-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-6 rounded-lg shadow-lg'>

      <h2 className='text-2xl font-bold mb-4 text-center my-12'>Verify Your Email</h2>
      <p className='text-center mb-4 text-gray-700'>A Six Digit OTP has been sent to your email. Please enter the OTP</p>
      <div className="flex gap-3 justify-center">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="w-12 h-12 text-center text-xl border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <div className='flex items-center justify-center mt-6'>
        <TiTick className='text-3xl text-green-500 mx-1' />
        <span className='text-green-500'>Email Verified</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </>

  );
};

export default OtpInput;
