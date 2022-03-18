import nftsAbi from "../abis/NftsAbi.js";
import nftsDelegatorAbi from "../abis/NftsDelegatorAbi.js";

const nftsContractAddress = "0xdc4c4fB4532c06A79A52a7b8818d15bc22103Ea2";
const nftsDelegatorContractAddress = "0x86283d4E57074423477fE79613736265E0311428";

let nftsContract;
let nftsDelegatorContract;
let web3js;
let balanceOfOwner;
let metadata;

let userAccount;

const rareness = ["N/A", "Common", "UnCommon", "Epic", "Legendary"];
const types = ["Reaper", "Sourcerer", "Warrior"];


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
        await nftsDelegatorContract.methods.mintCommon().send({from: userAccount, value: web3js.utils.toWei("0.01")})
        .on('receipt', async () =>{
            balanceOfOwner = await nftsContract.methods.balanceOf(userAccount).call({from: userAccount});
            let nftId = await nftsContract.methods.tokenOfOwnerByIndex(userAccount, balanceOfOwner - 1).call({from: userAccount});
            let uri = await nftsContract.methods.tokenURI(nftId).call({from: userAccount});
            let dna = await nftsContract.methods.getTokenDna(nftId).call({from: userAccount});
            console.log(dna);
            await fetch(uri).then(async response => {
                metadata = await response.json();
            });

            document.querySelector("#img").setAttribute("src", metadata["image"]);
            document.querySelector("#nft-dna").innerHTML = dna;
            document.querySelector("#nft-rareness").innerHTML = rareness[dna[0]];
            document.querySelector("#nft-stars").innerHTML = parseInt(dna[2]) + 1;
            document.querySelector("#nft-type").innerHTML = types[dna[1]];
        })
        .on('error', () => {
            alert("Error");
        });
    })
    
});
