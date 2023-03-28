import React from 'react'
import BG1 from '../images/blockchain.png';
import BG2 from '../images/fast-time.png';
import BG3 from '../images/trust.png';
import BG4 from '../images/no-credit-card.png';
const Section2 = () => {
  return (
    <div className='w-full p-5  text-center items-center flex flex-col'>
      <div className='text-center w-full font-bold text-4xl'>Our Product</div>
      <div className='w-1/2 h-[1px] my-2 bg-slate-300 text-center'></div>
      <div className='flex w-full justify-between p-5 gap-5'>
        <div className='flex flex-col items-center bg-slate-200 p-2 gap-2 rounded-md w-1/2 shadow-lg'>
        <img className='w-[100px] object-contain' src={BG1} alt="imgage" />
        <div className='font-semibold text-pink-500'>BlockChain Technology</div>
        </div>
        <div className='flex flex-col items-center bg-slate-200 p-2 gap-2 rounded-md w-1/2 shadow-lg'>
        <img className='w-[100px] object-contain' src={BG2} alt="imgage" />
        <div className='font-semibold text-pink-500'>Fast and secure</div>
        </div>
        <div className='flex flex-col items-center bg-slate-200 p-2 gap-2 rounded-md w-1/2 shadow-lg'>
        <img className='w-[100px] object-contain' src={BG3} alt="imgage" />
        <div className='font-semibold text-pink-500'>Trusted</div>
        </div>
        <div className='flex flex-col items-center bg-slate-200 p-2 gap-2 rounded-md w-1/2 shadow-lg'>
        <img className='w-[100px] object-contain' src={BG4} alt="imgage" />
        <div className='font-semibold text-pink-500'>No Debit or Credit Card Required</div>
        </div>
      </div>
    </div>
  )
}

export default Section2