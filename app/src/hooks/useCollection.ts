import { useCallback, useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import useContract from "./useContract";

export type NftMetadata = {
  author: string;
  name: string;
  tokenId: string;
  uri: string
}

const useCollection = () => {
  const contract = useContract()
  const [collection, setCollection] = useState<NftMetadata[]>()

  const getCollection = useCallback(async () => {
    if(!contract) return;
    const eventFilter = contract.filters.NftMinted();
    const events = await contract.queryFilter(eventFilter);

    const promises = events.map(({ args }) => apiClient(args?.tokenURI));
    const results = await Promise.all(promises)

    setCollection(results)
  }, [contract])

  useEffect(() => {
    if(!contract) return;
    getCollection();
  },[contract, getCollection])

  return collection
}

export default useCollection;