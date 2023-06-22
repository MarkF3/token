import React, { useState } from "react";
import {token_backend, canisterId, createActor} from "../../../declarations/token_backend";
import {AuthClient} from "@dfinity/auth-client";

function Faucet() {

const [payOutResult, setPayOutResult] = useState("Give me tokens");
const [isDisabled, setDisabled] = useState(false);

  async function handleClick(event) {
    setDisabled(true);

   // When deployed on the IC the below commented out code will allow for users on the backend to claim coins for there profile.

    // const authClient = await AuthClient.create();      
    // const identity = await authClient.getIdentity();

    // const authenticatedCanister = createActor(canisterId, {
    //   agentOptions: {
    //   identity, 

    //   }

    // })

    // const result = await authenticatedCanister.payOut();
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
