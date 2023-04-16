/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eyeColor, height, weight) {
    const nft = {
        "name": name,
        "eyeColor": eyeColor,
        "height": height,
        "weight": weight
    }
    nfts.push(nft);
    console.log("minted: ", name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(i = 0; i < nfts.length; i++) {
        console.log("Index: \t\t", i);
        console.log("Name: \t\t", nfts[i].name);
        console.log("Eye color: \t", nfts[i].eyeColor);
        console.log("Height: \t", nfts[i].height);
        console.log("Weight: \t", nfts[i].weight);
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs minted: ", nfts.length);
}

// call your functions below this line
mintNFT("Kashyap", "Black", "178 cm", "77 kg");
mintNFT("Vivek", "Grey", "164 cm", "57 kg");
mintNFT("Shubhankar", "Black", "162 cm", "50 kg");
listNFTs();
getTotalSupply();
