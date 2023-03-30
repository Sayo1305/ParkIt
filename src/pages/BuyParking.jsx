import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import data from "../utils/data";
import { getDatabase, onValue, ref } from "firebase/database";
const BuyParking = () => {
  const db = getDatabase();
  const [places, setplaces] = useState("");
  const [originalplace, setoriginalplace] = useState([]);
  const [placelist, setplacelist] = useState([]);
//   const [datalist, setdatalist] = useState([]);
  useEffect(() => {
    let temparr = [];
    var realdata = [];
    const get_from_base = () => {
      onValue(ref(db, `/`), (snapshot) => {
        snapshot.forEach((value) => {
          value.forEach((val) => {
            temparr.push(val.val());
          });
        });
      });
    };
    const get_data = () => {
      get_from_base();
      temparr.map(async (value) => {
        await fetch(`https://ipfs.io/ipfs/${value.IpfsHash}`)
          .catch((err) => console.log(err))
          .then((response) => response.json())
          .then((res) => {
            realdata.push(res);
          });
      });
    };
    get_data();
    //      console.log(realdata);
    setoriginalplace(realdata);
    setplacelist(realdata);
  }, []);
  useEffect(() => {
    handle_search();
  }, [places]);
  const handle_search = async () => {
    let temp = originalplace;
    if (places === "") {
      setplacelist(originalplace);
      return;
    }
    temp = temp.filter((item) => {
      return item.area.toLowerCase().includes(places.toLowerCase());
    });
    setplacelist(temp);
  };
  return (
    <div>
      <Navbar />
      <div className="p-2 flex justify-center w-full items-center">
        <input
          type={"text"}
          onChange={(e) => setplaces(e.target.value)}
          placeholder="search places"
          className="bg-slate-200 w-1/2 shadow-lg outline-none p-2 rounded-lg"
        ></input>
        <div className="p-2 bg-red-400 text-white rounded-md">Search</div>
      </div>
      <div className="grid grid-cols-5 justify-items-center w-5/6 mx-auto my-0 gap-5 p-4 flex-wrap">
        {placelist.map((val, idx) => (
          <Card data={val} key={idx} />
        ))}
      </div>
      <div className="grid grid-cols-5 justify-items-center w-5/6 mx-auto my-0 gap-5 p-4 flex-wrap">
        {
            placelist.map((val , idx)=>(
                  <Card key={idx} data={val}/>
            ))
        }
      </div>
    </div>
  );
};

export default BuyParking;
