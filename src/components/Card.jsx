import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {
  // console.log(data)
  const navigate = useNavigate();
  return (
    <div className='bg-slate-200 w-full flex flex-col h-auto rounded-md p-2' onClick={()=>{
      localStorage.setItem("owner_wallet_id" , data.Walletaddress);
      navigate(`/Placedetail/${data.id}`);
    }}>
      <div><img className='w-full h-[100px] object-cover' src={data.img_} alt="djd" /></div>
      <div>{data.area}</div>
      <div>{data.place}</div>
      <div>{data.pincode}</div>
      <div className='bg-red-200 p-1 text-center rounded-lg cursor-pointer'>Rent Now</div>
    </div>
  )
}

export default Card