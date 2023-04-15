import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import Swal from "sweetalert2";
const Input_form = () => {
  const db = getDatabase();
  const context = useContext(Appcontext);
  const apiKey = process.env.REACT_APP_API_KEY_;
  const secretKey = process.env.REACT_APP_SECRET_KEY_;
  const [Imagefile, setImagefile] = useState("");
  const [ImageUpload, setImageupload] = useState("");
  const [num_of_vehicles, setNum_of_vehicles] = useState(0);
  const { Walletaddress } = context;
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [selected_day, setselected_day] = useState([
    {
      id: 0,
      day: "Sunday",
      select_: false,
      timing: {
        "1 - 2": false,
        "2 - 3": false,
        "3 - 4": false,
        "4 - 5": false,
        "5 - 6": false,
        "6 - 7": false,
        "7 - 8": false,
        "8 - 9": false,
        "9 - 10": false,
        "10 - 11": false,
        "11 - 12": false,
        "12 - 13": false,
        "13 - 14": false,
        "14 - 15": false,
        "15 - 16": false,
        "16 - 17": false,
        "17 - 18": false,
        "18 - 19": false,
        "19 - 20": false,
        "20 - 21": false,
        "21 - 22": false,
        "22 - 23": false,
        "23 - 24": false,
        "24 - 1": false,
      },
    },
    {
      id: 1,
      day: "Monday",
      select_: false,
      timing: {
        "1 - 2": false,
        "2 - 3": false,
        "3 - 4": false,
        "4 - 5": false,
        "5 - 6": false,
        "6 - 7": false,
        "7 - 8": false,
        "8 - 9": false,
        "9 - 10": false,
        "10 - 11": false,
        "11 - 12": false,
        "12 - 13": false,
        "13 - 14": false,
        "14 - 15": false,
        "15 - 16": false,
        "16 - 17": false,
        "17 - 18": false,
        "18 - 19": false,
        "19 - 20": false,
        "20 - 21": false,
        "21 - 22": false,
        "22 - 23": false,
        "23 - 24": false,
        "24 - 1": false,
      },
    },
    {
      id: 2,
      day: "Tuesday",
      select_: false,
      timing: {
        "1 - 2": false,
        "2 - 3": false,
        "3 - 4": false,
        "4 - 5": false,
        "5 - 6": false,
        "6 - 7": false,
        "7 - 8": false,
        "8 - 9": false,
        "9 - 10": false,
        "10 - 11": false,
        "11 - 12": false,
        "12 - 13": false,
        "13 - 14": false,
        "14 - 15": false,
        "15 - 16": false,
        "16 - 17": false,
        "17 - 18": false,
        "18 - 19": false,
        "19 - 20": false,
        "20 - 21": false,
        "21 - 22": false,
        "22 - 23": false,
        "23 - 24": false,
        "24 - 1": false,
      },
    },
    {
      id: 3,
      day: "Wednesday",
      select_: false,
      timing: {
        "1 - 2": false,
        "2 - 3": false,
        "3 - 4": false,
        "4 - 5": false,
        "5 - 6": false,
        "6 - 7": false,
        "7 - 8": false,
        "8 - 9": false,
        "9 - 10": false,
        "10 - 11": false,
        "11 - 12": false,
        "12 - 13": false,
        "13 - 14": false,
        "14 - 15": false,
        "15 - 16": false,
        "16 - 17": false,
        "17 - 18": false,
        "18 - 19": false,
        "19 - 20": false,
        "20 - 21": false,
        "21 - 22": false,
        "22 - 23": false,
        "23 - 24": false,
        "24 - 1": false,
      },
    },
    {
      id: 4,
      day: "Thursday",
      select_: false,
      timing: {
        "1 - 2": false,
        "2 - 3": false,
        "3 - 4": false,
        "4 - 5": false,
        "5 - 6": false,
        "6 - 7": false,
        "7 - 8": false,
        "8 - 9": false,
        "9 - 10": false,
        "10 - 11": false,
        "11 - 12": false,
        "12 - 13": false,
        "13 - 14": false,
        "14 - 15": false,
        "15 - 16": false,
        "16 - 17": false,
        "17 - 18": false,
        "18 - 19": false,
        "19 - 20": false,
        "20 - 21": false,
        "21 - 22": false,
        "22 - 23": false,
        "23 - 24": false,
        "24 - 1": false,
      },
    },
    {
      id: 5,
      day: "Friday",
      select_: false,
      timing: {
        "1 - 2": false,
        "2 - 3": false,
        "3 - 4": false,
        "4 - 5": false,
        "5 - 6": false,
        "6 - 7": false,
        "7 - 8": false,
        "8 - 9": false,
        "9 - 10": false,
        "10 - 11": false,
        "11 - 12": false,
        "12 - 13": false,
        "13 - 14": false,
        "14 - 15": false,
        "15 - 16": false,
        "16 - 17": false,
        "17 - 18": false,
        "18 - 19": false,
        "19 - 20": false,
        "20 - 21": false,
        "21 - 22": false,
        "22 - 23": false,
        "23 - 24": false,
        "24 - 1": false,
      },
    },
    {
      id: 6,
      day: "Saturday",
      select_: false,
      timing: {
        "1 - 2": false,
        "2 - 3": false,
        "3 - 4": false,
        "4 - 5": false,
        "5 - 6": false,
        "6 - 7": false,
        "7 - 8": false,
        "8 - 9": false,
        "9 - 10": false,
        "10 - 11": false,
        "11 - 12": false,
        "12 - 13": false,
        "13 - 14": false,
        "14 - 15": false,
        "15 - 16": false,
        "16 - 17": false,
        "17 - 18": false,
        "18 - 19": false,
        "19 - 20": false,
        "20 - 21": false,
        "21 - 22": false,
        "22 - 23": false,
        "23 - 24": false,
        "24 - 1": false,
      },
    },
  ]);
  let metadata = JSON.stringify({
    place: place,
    area: area,
    pincode: pincode,
    fileUrl: ImageUpload,
  });
  const handle_submit = async () => {
    const current_time = new Date();
    const year = current_time.getFullYear();
    const month = current_time.getMonth();
    const day = current_time.getDate();
    const seconds = Date.now();
    const uuid = `${seconds}-${day}-${month}-${year}`;
    if (num_of_vehicles <= 0) {
      Swal.fire("", "enter correct number of vehicles", "info");
      return;
    }
    if (ImageUpload) {
      Swal.fire({
        title:
          "Do you want to save the changes, As it will be saved in Blockchain",
        showCancelButton: true,
        confirmButtonText: "Save",
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          let formdata = new FormData();
          formdata.append("place", place);
          formdata.append("area", area);
          formdata.append("pincode", pincode);
          formdata.append("file", ImageUpload);
          formdata.append("no_of_vehicles", num_of_vehicles);
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
              console.log(res);
              set(ref(db, `/${Walletaddress}/${uuid}`), {
                Walletaddress: Walletaddress,
                image: ImageUpload,
                place: place,
                area: area,
                pincode: pincode,
                verify: true,
                ipfs_hash: res,
                days : selected_day,
                id : uuid,
              });
            });
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });

      // const imghash = `ipfs://${resfile.data.IpfsHash}`;
      // console.log(imghash)
    } else {
      Swal.fire("", "Please upload image", "info");
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
            <img
              src={Imagefile}
              className="w-[200px] h-[200px] rounded-lg"
              alt="d"
            />
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
          <label className="font-semibold italic">No of Vehicle</label>
          <input
            className="outline-none bg-slate-100 p-2 text-xl rounded-md"
            type={"number"}
            onChange={(e) => setNum_of_vehicles(e.target.value)}
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
          <div className="flex gap-1 justify-between">
            {selected_day.map((day, idx) => (
              <>
                <div
                  id="day_map"
                  onClick={() => {
                    const newSelectedDay = [...selected_day]; // create a new copy of the array
                    newSelectedDay[idx].select_ = !newSelectedDay[idx].select_; // modify the new copy
                    setselected_day(newSelectedDay);
                  }}
                  className={`p-2  w-[100px] rounded-md shadow-md cursor-pointer hover:bg-lime-400 focus:bg-lime-500
    ${day.select_ ? "bg-lime-400" : "bg-white"}`}
                  key={idx}
                >
                  {day.day}
                </div>
              </>
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
