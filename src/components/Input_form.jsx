import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";

const Input_form = () => {
  const context = useContext(Appcontext);
  const [Imagefile, setImagefile] = useState("");
  const [ImageUpload, setImageupload] = useState("");
  const { Walletaddress } = context;
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
  const handle_submit = async () => {
    if (ImageUpload) {
      const formdata = new FormData();
      formdata.append("file", ImageUpload);
      console.log(process.env.REACT_APP_API_KEY)
      await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          "pinata_api_key": process.env.REACT_APP_API_KEY_,
          "pinata_secret_api_key":
            process.env.REACT_APP_SECRET_KEY_,
          "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`
        },
        body: FormData,
      })
        .catch((Err) => console.log(Err))
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
      // const imghash = `ipfs://${resfile.data.IpfsHash}`;
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
                setImageupload(src);
                setImagefile(URL.createObjectURL(src));
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
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold italic">Area</label>
          <input
            className="outline-none bg-slate-100 p-2 text-xl rounded-md"
            type={"text"}
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold italic">Pincode</label>
          <input
            className="outline-none bg-slate-100 p-2 text-xl rounded-md"
            type={"text"}
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold italic">Wallet address</label>
          <input
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
                  let temp = selected_day;
                  temp[idx].select_ = !temp[idx].select_;
                  setselected_day(temp);
                  console.log(selected_day);
                }}
                className={`p-2 bg-white rounded-md shadow-md cursor-pointer active:bg-lime-400 focus:bg-lime-500`}
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
