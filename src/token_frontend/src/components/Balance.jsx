import React, {useState} from "react";
import {token_backend} from "../../../declarations/token_backend";
import { Principal } from "@dfinity/principal";

function Balance() {


  const [inputValue, setInput] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [currency, setCurrency] = useState("");
  const [isHidden, setHidden] = useState(true);

  
  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    setCurrentBalance(balance.toLocaleString());
    const currencySymbol = await token_backend.symbolReturn();
    setCurrency(currencySymbol);
    setHidden(false);

  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {currentBalance} {currency}</p>
    </div>
  );
}

export default Balance;
