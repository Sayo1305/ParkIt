import { TempleWallet } from "@temple-wallet/dapp";

import { useContext, useEffect, useState , React } from "react";
import { Appcontext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [isconnected, setisconnected] = useState(false);
  const [walletaddress, setwalletaddress] = useState("");
  const context = useContext(Appcontext);
  const { setWalletaddress, setwalletconnection } = context;
  useEffect(() => {
    const check_wallet = async () => {
      try {
        if(window.ethereum){
          // Do something 
        }else{
          alert("install metamask extension!!")
        }
      } catch (err) {
        console.log(err);
      }
    };
    check_wallet();
  }, []);
  const handle_connect = async () => {
    try {
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
              setisconnected(true);
              setwalletaddress(res[0]);
              setWalletaddress(res[0]);
              setwalletconnection(true);
      })
    } catch (err) {
      alert("check Your wallet connection request already send");
      console.log(err.message);
      setisconnected(false);
      setwalletconnection(false);
    }
  };
  return (
    <div className="w-full p-4  bg-slate-100 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold italic cursor-pointer" onClick={() => {
          navigate("/");
        }}>
        Park<span className="text-purple-600 not-italic">iT</span>
      </div>
      <div className="flex gap-2 items-center">
        <div onClick={()=> navigate('/BuyParking')} className="bg-blue-500 text-white p-2 rounded-md cursor-pointer shadow-md outline-none border-none">
          Find Parking
        </div>
        <div
          onClick={() => {
            navigate("/AddParking");
          }}
          className="bg-yellow-500 cursor-pointer text-white p-2 rounded-md shadow-md outline-none border-none"
        >
          Add Parking
        </div>
        {isconnected === false ? (
          <button
            type={"button"}
            onClick={handle_connect}
            className="bg-purple-500 text-white p-2 rounded-md shadow-md outline-none border-none"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            type={"button"}
            className="bg-green-500 text-white p-2 rounded-md shadow-md outline-none border-none"
          >
            Connected
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
