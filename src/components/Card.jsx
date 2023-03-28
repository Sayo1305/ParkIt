import React from 'react'

const Card = ({data}) => {
  return (
    <div className='bg-slate-200 w-[200px] flex flex-col h-auto rounded-md p-2'>
      <div><img className='w-full h-[100px] object-cover' src={data.img_} alt="djd" /></div>
      <div>{data.area}</div>
      <div>{data.place}</div>
      <div>{data.pincode}</div>
      <div className='bg-red-200 p-1 text-center rounded-lg cursor-pointer'>Button</div>
    </div>
  )
}

export default Card