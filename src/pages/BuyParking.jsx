import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { getDatabase, onValue, ref } from "firebase/database";
import { Appcontext } from "../context/Appcontext";
const BuyParking = () => {
  const db = getDatabase();
  const [places, setplaces] = useState("");
  const [originalplace, setoriginalplace] = useState([]);
  const [placelist, setplacelist] = useState([]);
  const context = useState(Appcontext);
  useEffect(() => {
    let temparr = [];
    const get_from_base = async() => {
      await onValue(ref(db, `/`), (snapshot) => {
        snapshot.forEach((value) => {
          value.forEach((val) => {
            temparr.push(val.val());
          });
        });
      });
      setoriginalplace(temparr);
      setplacelist(temparr);
    };
    get_from_base();

  }, []);
  useEffect(() => {
    handle_search();
  }, [places]);
  useEffect(() => {
    handle_search();
  }, []);
  const handle_search = async () => {
    let temp = originalplace;
    if (places === "") {
      setplacelist(originalplace);
      return;
    }
    else{
      temp = temp.filter((item) => {
        return item.area.toLowerCase().includes(places.toLowerCase());
      });
      setplacelist(temp);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="p-2 flex justify-center gap-2 w-full items-center">
        <input
          type={"text"}
          value={places}
          onChange={(e) => setplaces(e.target.value)}
          placeholder="search places"
          className="bg-slate-200 w-1/2 shadow-lg outline-none p-2 rounded-lg"
        ></input>
        <div className="p-2 bg-red-400 text-white rounded-md">Search</div>
      </div>
      <div className="grid grid-cols-4 justify-items-center w-5/6 mx-auto my-0 gap-5 p-4 flex-wrap">
        {
          placelist.length === 0 && <div>No Place Found</div>
        }
        {placelist && placelist.map((val, idx) => (
          <Card data={val} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default BuyParking;
