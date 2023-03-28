"use client";
import { Appcontext } from "./Appcontext";
import React, { useState } from "react";

const AppState = (props) => {
  const [Walletconnection, setwalletconnection] = useState(false);
  const [Walletaddress, setWalletaddress] = useState("");
  return (
    <Appcontext.Provider
      value={{
        Walletaddress,
        Walletconnection,
        setWalletaddress,
        setwalletconnection,
      }}
    >
      {props.children}
    </Appcontext.Provider>
  );
};

export default AppState;
