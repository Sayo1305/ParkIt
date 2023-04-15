import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Placedetails = () => {
      const db = getDatabase();
      const [dataset , setdataset] = useState([]);
      const {id : primary_id} = useParams();
      const owner_wallet_id = localStorage.getItem("owner_wallet_id");
      useEffect(()=>{
            let temparr = [];
            onValue(ref( db, `/${owner_wallet_id}/${primary_id}/`) , (snapshot)=>{
                        temparr.push(snapshot.val());
            })
            console.log(temparr);
            setdataset(temparr);
      },[]);
  return (
    <div>
      place detail make page fetch by {primary_id}
    </div>
  )
}

export default Placedetails