import nftsAbi from "../abis/NftsAbi.js";
import nftsDelegatorAbi from "../abis/NftsDelegatorAbi.js";

const nftsContractAddress = "0x2b8318BfbFD04fBB1365b888480510B27DF82c2c";
const nftsDelegatorContractAddress = "0xa48bfC422729Dc249e9e29d08701412CDE44857c";

let nftsContract;
let nftsDelegatorContract;
let web3js;
let balanceOfOwner;

let userAccount;



addEventListener('load', async function() {
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(window.ethereum);
  
        nftsContract = new web3js.eth.Contract(nftsAbi, nftsContractAddress);
        nftsDelegatorContract = new web3js.eth.Contract(nftsDelegatorAbi, nftsDelegatorContractAddress);

        await ethereum.request({ method: 'eth_requestAccounts' })
        .then(function(result) {
            userAccount = result[0];
            console.log(userAccount);
        });
   
    } else {
        errorAlert("Please Install Metamask.");
    }

    document.querySelector("#btn-mint-common").addEventListener('click', async () => {
        await nftsDelegatorContract.methods.mintCommon().send({from: userAccount, value: web3js.utils.toWei("0.1")})
        .on('receipt', async () =>{
            balanceOfOwner = await nftsContract.methods.balanceOf(userAccount).call({from: userAccount});
            let nftId = await nftsContract.methods.tokenOfOwnerByIndex(userAccount, balanceOfOwner - 1).call({from: userAccount});
            let uri = await nftsContract.methods.tokenURI(nftId).call({from: userAccount});
            let metadata = fetch("https://gateway.pinata.cloud/ipfs/QmUzFcGfbHaz81D2bZWKvt4DoREL81AoDCEhoPrs1JrQYw/1.json").then(response => response.text());
            let img = document.querySelector("#img");
            img.setAttribute("src", metadata["image"]);
        })
        .on('error', () => {
            alert("Error");
        });
    })
    
});
