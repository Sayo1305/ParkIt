import { TezosToolkit } from "@taquito/taquito";
import { TempleWallet } from "@temple-wallet/dapp";
import React, { useContext, useEffect } from "react";
import Input_form from "../components/Input_form";
import Navbar from "../components/Navbar";
import { Appcontext } from "../context/Appcontext";
const Addparking = () => {
  const context = useContext(Appcontext);
  const Tezos = new TezosToolkit("https://testnet-tezos.giganode.io");
  const wallet = new TempleWallet("MyAwesomeDapp");
  const handle_click = async () => {
    await wallet.connect("ghostnet");
    await Tezos.contract
      .transfer({ to: "tz1fvHG5YrcbyrVZy3khyGGgAC5Q2MvQ7cTM", amount: 1 })
      .then(async (op) => {
        console.log(await op.confirmation);

      });
  };
  const handle_contract = async()=>{
    await Tezos.setWalletProvider(wallet);
  await Tezos.wallet
  .transfer({ to: 'tz1NhNv9g7rtcjyNsH8Zqu79giY5aTqDDrzB', amount: 100 })
  .send()
  .then((op) => {
    console.log(`Hash: ${op.opHash}`);

    op.confirmation()
      .then((result) => {
        console.log(result);
        if (result.completed) {
          console.log('Transaction correctly processed!');
        } else {
          console.log('An error has occurred');
        }
      })
      .catch((err) => console.log(err));
  });
  }

  return (
    <div className="w-full h-auto bg-lime-100">
      <Navbar />
<Input_form/>

    </div>
  );
};

export default Addparking;
