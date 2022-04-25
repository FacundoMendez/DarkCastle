import nftsAbi from "../abis/NftsAbi.js";
import nftsDelegatorAbi from "../abis/NftsDelegatorAbi.js";

const nftsContractAddress = "0x9a41E48dE6689Ea7fE39f631CaD1dAf4d4B17403";
const nftsDelegatorContractAddress = "0x568643c9e4c9617f4ceCfdFC3AE6d239495312dD";

// Nfts Rinkeby: 0x9a41E48dE6689Ea7fE39f631CaD1dAf4d4B17403
// Nfts Mumbai: 0x0dEEc9C69286F2a0da237bdb8db20FE846a1c9cb

// Nfts Delegator Rinkeby: 0x568643c9e4c9617f4ceCfdFC3AE6d239495312dD

let nftsContract;
let nftsDelegatorContract;
let web3js;
let balanceOfOwner;
let metadata;

let userAccount;

const rareness = ["N/A", "Obsidian", "Emerald", "Ruby", "Diamond"];
const types = ["N/A", "Reaper", "Sourcerer", "Warrior"];


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
        await nftsDelegatorContract.methods.mintCommon().send({from: userAccount, value: web3js.utils.toWei("0.0001")})
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
            document.querySelector("#nft-stars").innerHTML = parseInt(dna[2]);
            document.querySelector("#nft-type").innerHTML = types[dna[1]];
        })
        .on('error', () => {
            alert("Error");
        });
    });
    
    document.querySelector("#btn-mint-uncommon").addEventListener('click', async () => {
        await nftsDelegatorContract.methods.mintRare().send({from: userAccount, value: web3js.utils.toWei("0.0001")})
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
            document.querySelector("#nft-stars").innerHTML = parseInt(dna[2]);
            document.querySelector("#nft-type").innerHTML = types[dna[1]];
        })
        .on('error', () => {
            alert("Error");
        });
    });

    document.querySelector("#btn-last").addEventListener('click', async () => {
        
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
        document.querySelector("#nft-stars").innerHTML = parseInt(dna[2]);
        document.querySelector("#nft-type").innerHTML = types[dna[1]];
    });

    document.querySelector("#btn-mint-rare").addEventListener('click', async () => {
        await nftsDelegatorContract.methods.mintEpic().send({from: userAccount, value: web3js.utils.toWei("0.0001")})
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
            document.querySelector("#nft-stars").innerHTML = parseInt(dna[2]);
            document.querySelector("#nft-type").innerHTML = types[dna[1]];
        })
        .on('error', () => {
            alert("Error");
        });
    });

    document.querySelector("#btn-mint-legendary").addEventListener('click', async () => {
        await nftsDelegatorContract.methods.mintMithic().send({from: userAccount, value: web3js.utils.toWei("0.0001")})
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
            document.querySelector("#nft-stars").innerHTML = parseInt(dna[2]);
            document.querySelector("#nft-type").innerHTML = types[dna[1]];
        })
        .on('error', () => {
            alert("Error");
        });
    });
    
});
