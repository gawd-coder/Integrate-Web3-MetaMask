// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

// a very simple smart contract with a integer variable, we can change its value and also get its value
contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
