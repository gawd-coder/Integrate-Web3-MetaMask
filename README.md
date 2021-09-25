# Integrate-Web3-MetaMask
Integration of Metamask with Dapp, connect Metamask to Ganache with Metamask seed phrase


# Install

This project uses Node Version Manager : `nvm`, `Node`,`Node Package Manager` : `npm`, `Web3`, `Truffle` and `Ganache-CLI`. Go check them out if you don't have them locally installed.

$ `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

$ `nvm install node`

$ `npm install -g web3`

$ `npm install -g truffle`

# Interpretation :

End user wants to do some transaction so our metamask frontend creates an unsigned transaction and it sends a request to metamask to sign this transaction. Metamask confirms the details with the user then sends the signed transaction to the ethereum network. you can connect to mainnet/testnet/your local ganache instance.


Truffle Boxes are helpful boilerplates that allow you to focus on what makes your dapp unique. In addition to Truffle, Truffle Boxes can contain other helpful modules, Solidity contracts & libraries, front-end views and more; all the way up to complete example dapps.


Dapp project setup using truffle framework :-

`truffle unbox react`

setup both smart contract part and react frontend.

contracts/SimpleStorage.sol got the simple smart contract.

src/App.js for react components and the integration with smart contracts. 

We will not use the web3 function provided by truffle react box, instead write our own.

Now I will run Ganache, load the application’s frontend and by metamask connect to ganache. Instead of truffle develop we use:- 

In the options I will specify the seed phrase used to generate the 10 ethereum addresses that comes pre funded with some ether and I will use the same seed phrase for metamask, this way they will come prefunded with ether in them and I will be able to send some transaction. Go to metamask copy te security passphrase words sentence and put that as an option for ganache cli


`ganache-cli -m "insert_seed_phrase"`

<img width="212" alt="Screenshot 2021-09-25 at 10 59 22 PM" src="https://user-images.githubusercontent.com/57283161/134780744-1f50d7d2-ec36-41c1-8ce9-12f27e437103.png">


Deploying to develop network as we have specified the same in out truffle-config file


`truffle migrate --reset develop`

Running frontend now :-

`$ npm install`
`$ npm start`


<img width="1433" alt="Screenshot 2021-09-25 at 10 44 17 PM" src="https://user-images.githubusercontent.com/57283161/134780780-22c72121-b6e4-448a-a139-8cfce671c467.png">



# Contributing

Feel free to dive in! Open an issue or submit PRs.
