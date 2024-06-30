/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


//create a js object to hold your data
const DataModal = [];


// this function will take in some values as parameters, create an
// DataModal object using the parameters passed to it for its metadata, 
// and store it in the js object above.
function mintNFT (CarName, CompanyName, Type,price) {
    const NFT = {
        "CarName": CarName,
        "CompanyName":CompanyName,
        "Type":Type,
        "price":price
    }
    DataModal.push(NFT);
    console.log("Minted: "+ CarName);
}
// create a "loop" that will go through an "array" of DatModal
// and print their metadata with the help of console.log()
function listNFTs () {
    for(let i = 0; i < DataModal.length; ++i){
        console.log();
        console.log("CarName: \t\t" + DataModal[i].CarName);
        console.log("Company Name: \t\t" + DataModal[i]. CompanyName);
        console.log("Type: \t\t" + DataModal[i].Type);
        console.log("price: \t\t" + DataModal[i].price);
    }
}

// print the total number of DataModals we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number NFTs held: "+DataModal.length);
}

// call your functions below this line
mintNFT("Baleno", "Ertiga", "Swift", "XL6");
mintNFT("Maruti", "Toyota", "Tata", "Mahindra");
mintNFT("SUV", "MUV", "SEDAN", "MPV");
listNFTs();
getTotalSupply();
