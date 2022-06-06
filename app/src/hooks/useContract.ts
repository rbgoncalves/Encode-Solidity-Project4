import { ethers } from "ethers";
import { useMemo } from "react";
import RMCjson from "../assets/RealMonkeyCollection.json";
import { RMC_ADDRESS } from "../config";

const useContract = () => {
  return useMemo(() => {
    try{    
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const rmcContract = new ethers.Contract(
        RMC_ADDRESS,
        RMCjson.abi,
        signer
      );

      return rmcContract;

    } catch (error) {
      console.error(error);
    }
  }, [])
}

export default useContract;