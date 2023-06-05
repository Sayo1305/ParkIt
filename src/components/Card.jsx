import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className='h-full w-full flex flex-col gap-2 cursor-pointer p-3 shadow-lg bg-[#74c5cd] rounded-lg ' onClick={()=>{
      localStorage.setItem("owner_wallet_id" , data.Walletaddress);
      navigate(`/Placedetail/${data.id}`);
    }}>
      <div><img className='w-full rounded-lg h-[200px] object-cover' src={data.image} alt="djd" /></div>
      <div className='w-full text-lg text-center font-semibold'>{data.area}</div>
      <div className='text-center w-full'>{data.place} | {data.pincode}</div>
      <div className='bg-green-500 border border-black p-1 text-center rounded-lg cursor-pointer'>Rent Now</div>
    </div>
  )
}

export default Card