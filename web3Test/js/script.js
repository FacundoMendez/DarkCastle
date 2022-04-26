import nftsAbi from "../abis/NftsAbi.js";
import nftsDelegatorAbi from "../abis/NftsDelegatorAbi.js";

const nftsContractAddress = {"4": "0xf0D5DD5B16785c50F6aFba0d7f3c70050545b2a7", "69": "0xDfA408532B3c9D59a2d9e9aafBDd69D0855DDB94"};
const nftsDelegatorContractAddress = {"4": "0x9b3d516Bb02B7204D298cb494686CA1dB5A4742E", "69": "0x05A2e4FD4CccCC377683f68187fB45b9b2FA1bCC"};
const chainNames = {"4": "Rinkeby", "69": "Optimism(Kovan)"}
const endpointIds = {"4": 10001, "69": 10011}

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
  
        await web3js.eth.net.getId().then(async res => {
            console.log(res);

            // Check if Chain is Supported
            if(res in nftsContractAddress) {

                nftsContract = new web3js.eth.Contract(nftsAbi, nftsContractAddress[res]);
                nftsDelegatorContract = new web3js.eth.Contract(nftsDelegatorAbi, nftsDelegatorContractAddress[res]);

                await ethereum.request({ method: 'eth_requestAccounts' })
                .then(function(result) {
                    userAccount = result[0];
                    console.log(userAccount);
                });

            } else {
                console.log("unsupported chain.")
            }

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
            console.log(metadata);
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
        }); 
    });

    document.querySelector("#btn-traverse").addEventListener('click', async () => {

        let nftId = document.querySelector("#nftId").value;
        let chainId = document.querySelector("#chainId").value;

        if(chainId in endpointIds) {

            await nftsContract.methods.traverseChains(endpointIds[chainId], nftId).send({from: userAccount, value: web3js.utils.toWei("0.1")})
            .on('receipt', () => {
                alert("Traversed Succesful. Please wait some minutes for the transaction to be reflected in the other chain.");
            });

        } else {
            alert("Unsupported chainId.")
        }

    });
    
});

// Check Metamask Account Change
window.ethereum.on('accountsChanged', function (accounts) {

    window.location.reload();

});
  
  
// Check Metamask Network Change
ethereum.on('chainChanged', (chainId) => {

    window.location.reload();

});