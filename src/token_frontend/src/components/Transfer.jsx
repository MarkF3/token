import React, {useState} from "react";
import { token_backend } from "../../../declarations/token_backend/index";
import { Principal } from "@dfinity/principal";


function Transfer() {

 const [toAccountId, setAccountId] = useState("");
 const [amount, setAmount] = useState("");
 const [isDisabled, setDisabled] = useState(false);
 const [isHidden, setHidden] = useState(true);
 const [theResult, setResult] = useState("");
  async function handleClick() {
    
  setDisabled(true);
 console.log(toAccountId);
 console.log(amount);

const principal = Principal.fromText(toAccountId);
const amountToTransfer = Number(amount);
const returnal = await token_backend.transfer(principal, amountToTransfer);


console.log(returnal);
setResult(returnal);
setDisabled(false);
setHidden(false);





  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={toAccountId}
                onChange={(e) => {setAccountId(e.target.value)}}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => {setAmount(e.target.value)}}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{theResult}</p>
      </div>
    </div>
  );
}

export default Transfer;
