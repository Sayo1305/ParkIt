import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Placedetails = () => {
  const db = getDatabase();
  const [dataset, setdataset] = useState([]);
  const { id: primary_id } = useParams();
  const owner_wallet_id = localStorage.getItem("owner_wallet_id");
  const [timmingdata, settimmingdata] = useState([]);
  useEffect(() => {
    let temparr = [];
    onValue(ref(db, `/${owner_wallet_id}/${primary_id}/`), (snapshot) => {
      temparr.push(snapshot.val());
    });
    let arr = [];
    temparr[0].days.map((val) => {
      if (val.select_ === true) {
        const val_data = Object.keys(val.timing);
        for (var i = 0; i < val_data.length; i++) {
          // console.log(val.timing[val_data[i]])
          if(val.timing[val_data[i]] === true)
          {
            // console.log(val.timing)
            arr.push(val.timing[val_data])
          }
        }
      }
    });
    console.log(arr);
    setdataset(temparr[0]);
  }, []);
  return (
    <div className="w-full min-h-screen bg-green-200">
      <div className="w-full h-[400px] object-contain bg-black shadow-2xl relative">
        <img
          className="w-full h-full object-contain object-center"
          src={dataset?.image}
          alt=""
        />
      </div>
      <div className="w-full text-center text-6xl font-semibold">
        {dataset?.place}
      </div>
      <div className="flex p-5 w-full justify-center text-2xl items-center gap-10">
        <div>{dataset?.area}</div>|<div>{dataset?.pincode}</div>
      </div>
      <div className="p-2 font-semibold text-2xl">Available Date</div>
      <div className="flex flex-wrap p-3 gap-5">
        {dataset?.days?.map((val) => (
          <>
            {val.select_ === true && (
              <div className="p-2 cursor-pointer bg-green-600 rounded-lg text-white">
                {val.day}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Placedetails;
