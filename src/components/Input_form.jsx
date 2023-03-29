import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import  {app} from '../firebase'
import { getDatabase, ref , set } from "firebase/database";

const Input_form = () => {
  const db  = getDatabase();
  const context = useContext(Appcontext);
  const apiKey = process.env.REACT_APP_API_KEY_;
  const secretKey = process.env.REACT_APP_SECRET_KEY_;
  const [Imagefile, setImagefile] = useState("");
  const [ImageUpload, setImageupload] = useState("");
  const { Walletaddress } = context;
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [selected_day, setselected_day] = useState([
    {
      id: 0,
      day: "Sunday",
      select_: false,
    },
    {
      id: 1,
      day: "Monday",
      select_: false,
    },
    {
      id: 2,
      day: "Tuesday",
      select_: false,
    },
    {
      id: 3,
      day: "Wednesday",
      select_: false,
    },
    {
      id: 4,
      day: "Thursday",
      select_: false,
    },
    {
      id: 5,
      day: "Friday",
      select_: false,
    },
    {
      id: 6,
      day: "Saturday",
      select_: false,
    },
  ]);
  let metadata = JSON.stringify({
    place: place,
    area: area,
    pincode: pincode,
    fileUrl: ImageUpload,
  });
  const handle_submit = async () => {
    if (ImageUpload) {
      let formdata = new FormData();
      formdata.append("place", place);
      formdata.append("area", area);
      formdata.append("pincode", pincode);
      formdata.append("file", ImageUpload);
      await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
        method: "POST",
        headers: {
          pinata_api_key: apiKey,
          pinata_secret_api_key: secretKey,
          "Content-Type": `application/json`,
        },
        body: metadata,
      })
        .catch((Err) => console.log(Err))
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          set(ref(db , `/${Walletaddress}/${crypto.randomUUID()}`) , res);
        });
      // const imghash = `ipfs://${resfile.data.IpfsHash}`;
      // console.log(imghash)
    } else {
      console.log("not");
    }
  };
  return (
    <div className="p-3">
      {" "}
      <div className="w-full text-center p-3 text-2xl font-bold">
        Add Parking Slot
      </div>
      <div className="w-5/6 bg-slate-300 shadow-md flex flex-col items-center gap-2 p-5 rounded-md mx-auto my-0">
        <div>
          <div className="relative bg-transparent text-center border-2 border-dashed  w-[100px] border-black  h-[50px]">
            <input
              className="bg-blue-500 opacity-0 w-[100px] h-[50px] absolute top-0"
              type={"file"}
              onChange={(e) => {
                let src = e.target.files[0];
                setImagefile(URL.createObjectURL(src));
                let reader = new FileReader();
                reader.readAsDataURL(src);
                reader.onloadend = function () {
                  setImageupload(reader.result);
                };
              }}
            ></input>
            Upload pic
          </div>
        </div>
        <div>
          {Imagefile !== "" && (
            <img src={Imagefile} className="w-[300px] h-[300px]" alt="d" />
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold italic">Place</label>
          <input
            className="outline-none bg-slate-100 p-2 text-xl rounded-md"
            type={"text"}
            onChange={(e) => setPlace(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold italic">Area</label>
          <input
            className="outline-none bg-slate-100 p-2 text-xl rounded-md"
            type={"text"}
            onChange={(e) => setArea(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold italic">Pincode</label>
          <input
            className="outline-none bg-slate-100 p-2 text-xl rounded-md"
            type={"text"}
            onChange={(e) => setPincode(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold italic">Wallet address</label>
          <input
            disabled
            className="outline-none bg-slate-100 p-2 text-xl rounded-md"
            type={"text"}
            defaultValue={Walletaddress}
          ></input>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-semibold italic">No of Days (Active)</label>
          <div className="flex w-5/6 mx-auto my-0 justify-between">
            {selected_day.map((day, idx) => (
              <div
                id="day_map"
                onClick={() => {
                  const newSelectedDay = [...selected_day]; // create a new copy of the array
                  newSelectedDay[idx].select_ = !newSelectedDay[idx].select_; // modify the new copy
                  setselected_day(newSelectedDay); // set the state to the new copy
                }}
                className={`p-2 bg-white rounded-md shadow-md cursor-pointer hover:bg-lime-400 focus:bg-lime-500
    ${day.select_ ? "bg-lime-400" : ""}`}
                key={idx}
              >
                {day.day}
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-red-400 p-2 font-semibold text-white rounded cursor-pointer"
          onClick={handle_submit}
        >
          submit
        </div>
      </div>
    </div>
  );
};

export default Input_form;
