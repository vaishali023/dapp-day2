var contractABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "hello",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function",
        "signature": "0x19ff1d21"
      }
];
var contractAddress = '0x787C140F26eAecF494734531cE66b5277c19A7c7';
var web3 = new Web3('http://localhost:9545');
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
    .then(result => {
      document.getElementById('hello').innerHTML = result;
    })
})



