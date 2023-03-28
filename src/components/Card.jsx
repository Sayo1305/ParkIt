import React from 'react'

const Card = ({data}) => {
  return (
    <div className='bg-slate-200 w-[200px] flex flex-col h-[200px] rounded-md p-2'>
      <div>{data.area}</div>
      <div>Button</div>
    </div>
  )
}

export default Card