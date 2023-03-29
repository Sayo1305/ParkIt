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
        const available = await TempleWallet.isAvailable();
        if (!available) {
          throw new Error("Temple Wallet not installed");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if(window.location.pathname !== '/' && walletaddress === "")
    {
      handle_connect();
    }
    check_wallet();
  }, []);
  const handle_connect = async () => {
    try {
      const wallet = new TempleWallet("MyAwesomeDapp");
      await wallet.connect("ghostnet");
      // the TempleWallet can return the user's address
      const userAddress = wallet.pkh || (await wallet.getPKH());
      console.log(userAddress);
      setwalletaddress(userAddress);
      setWalletaddress(userAddress);
      setwalletconnection(true);
      setisconnected(true);
    } catch (err) {
      console.log(err.message);
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
