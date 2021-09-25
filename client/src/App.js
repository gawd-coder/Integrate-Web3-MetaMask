import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import Web3 from "web3";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance, check src/getWeb3.js to see the internal working code.
      const web3 = await getWeb3();

      // below represents the working of above
      /*

      // check if on a window object we have a ethereum object provider, window object is provided by browser and when metamask is present it injects this Ethereum object on the window object
      // basically if this exists we have metamask
      // window.ethereum implements the provider API of web3

      let web3;
      if(window.ethereum){
        web3 = new Web3(window.ethereum)
        // metamask also has a privacy feature where users need to allow to use metamask
        // can use web3 with metamask
        // else if covers the case for different wallet / older metamask version
        await ethereum.enable();
      }else if(window.web3){
        web3 = new Web3(window.web3.currentProvider)
      }

      */
      
      




      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      instance.options.address = "0xA6814aA7595D3939ed409249083000d0427D20E0";


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
