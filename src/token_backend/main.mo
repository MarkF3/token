

import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";


actor Token {

var owner: Principal = Principal.fromText("h3uxk-lcvmc-k43zk-walca-q2pan-brtgh-llb76-okq5z-ugzbs-tsiez-sae");
var totalSupply : Nat = 1000000000;


var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);


balances.put(owner, totalSupply);

public query func balanceOf(who: Principal) : async Nat{

let balance : Nat = switch (balances.get(who)) {
  case null 0;
  case (?result) result;
};

return balance;
};

public query func symbolReturn() : async Text{
var symbol : Text = "Abds";
  return symbol;

};

public shared(msg)  func payOut() : async Text {

if(balances.get(msg.caller) == null){

let amount = 10000;
Debug.print(debug_show(msg.caller)) ;
balances.put(msg.caller, amount);
var isSuccess : Text = "Success";
return isSuccess;




} else {
  
return "denied";

};







};



}