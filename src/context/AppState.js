"use client";
import { Appcontext } from "./Appcontext";
import React, { useState } from "react";

const AppState = (props) => {
  const [Walletconnection, setwalletconnection] = useState(false);
  const [Walletaddress, setWalletaddress] = useState("");
  const [datalist, setdatalist] = useState([]);
  return (
    <Appcontext.Provider
      value={{
        Walletaddress,
        Walletconnection,
        datalist,
        setdatalist,
        setWalletaddress,
        setwalletconnection,
      }}
    >
      {props.children}
    </Appcontext.Provider>
  );
};

export default AppState;
