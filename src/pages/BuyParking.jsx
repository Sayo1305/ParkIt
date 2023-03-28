import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar'
import data from '../utils/data';

const BuyParking = () => {
      const [places , setplaces] = useState("");
      const [originalplace , setoriginalplace] = useState(data);
      const [placelist , setplacelist] = useState([]);
      useEffect(()=>{
            handle_search();
      },[places]);
      const handle_search = async ()=>{
            let temp = originalplace;
            if(places === "")
            {
                  setplacelist(originalplace);
                  return;
            }
            temp = temp.filter((item) => {
                  return item.area.toLowerCase().includes(places.toLowerCase());
            });
            setplacelist(temp);
      }
  return (
    <div>
      <Navbar/>
      <div className='p-2 flex justify-center w-full items-center'>
            <input type={"text"} onChange={(e) => setplaces(e.target.value)} placeholder="search places" className="bg-slate-200 w-1/2 shadow-lg outline-none p-2 rounded-lg"></input>
            <div className='p-2 bg-red-400 text-white rounded-md'>Search</div>
      </div>
      <div className='grid grid-cols-5 justify-items-center w-5/6 mx-auto my-0 gap-5 p-4 flex-wrap'>
            {placelist.map((val , idx)=> (
                  <Card data={val} key={idx}/>
            ))}
      </div>
    </div>
  )
}

export default BuyParking