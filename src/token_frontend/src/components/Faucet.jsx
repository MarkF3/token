import React, { useState } from "react";
import {token_backend} from "../../../declarations/token_backend";


function Faucet() {

const [payOutResult, setPayOutResult] = useState("Give me tokens");
const [isDisabled, setDisabled] = useState(false);

  async function handleClick(event) {
    setDisabled(true);
    const result = await token_backend.payOut();
    setPayOutResult(result);
    console.log(result);
    setDisabled(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free tokens here! Claim 10,000 coins to your account.</label>
      <p className="trade-buttons">
        <button 
        id="btn-payout"
        onClick={handleClick}
        disabled={isDisabled}
        >
          {payOutResult}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
