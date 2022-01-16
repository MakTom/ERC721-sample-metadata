import React, {useState, useEffect} from "react";
const testABI = require('./artifacts/contracts/nft.sol/NFT.json');
const ethers = require('ethers');

function App() {

  const [NFTMetadata, setNFTMetadata]= useState();
  const [isloading,setisloading] = useState(true);
  useEffect(() => {
    var baseURI = "";
    const fetchBaseURI = async () => {
      const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/0f41846424184150a92dae3db952cdea");
      let contractAddress = "0x2B4867486bC36C602954f9661Af3cF44Cc643B8F";
      let contract = new ethers.Contract(contractAddress, testABI.abi, provider);
      baseURI = await contract.getBaseURI();
      fetch(baseURI).then(res =>{
        if (res.ok){
          return res.json();
        }
      }).then(data =>{
        setNFTMetadata(data);
        setisloading(false);
      })
    }
    fetchBaseURI();
}, [])

return (
    <div className="nft">
    { isloading && <div>..Loading...</div>}
    {
      NFTMetadata && (
        <article>
        <h1>Metadata</h1>
          <p>Name: {NFTMetadata.properties.name.value}</p>
          <p>Origin: {NFTMetadata.properties.origin.value}</p>
          <img src={NFTMetadata.properties.image.link} alt="Anime NFT"/>
        </article>
      )
    }              
    </div>    
  );
}
export default App;
