"use client"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/redux/slices/counterSlice';
import type { RootState, AppDispatch } from '@/redux/store';

export default function dashboard() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className='ml-24'>
        {/* <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button> */}
      </div>
    </>
  )
}
