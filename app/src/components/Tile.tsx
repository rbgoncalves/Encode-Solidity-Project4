import { NftMetadata } from "../hooks/useCollection"
import { IPFS_GET } from "../services/routes"
import styled from "styled-components"

type Props = {
  nft: NftMetadata
}

const Image = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const Container = styled.div`
  margin: 20px;
  box-shadow:5px 5px 10px 0px #000000;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h2`
 line-height: 10px;
`;


export const Tile = ({ nft } : Props) => {
  return (
    <Container>
      <a href={nft.uri}>
        <Image src={IPFS_GET(nft.tokenId)}/>
      </a>
      <Subtitle>{nft.name}</Subtitle>
      <p><b>Author: </b>{nft.author}</p>
    </Container>
  )
}
