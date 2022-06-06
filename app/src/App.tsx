import { Tile } from './components/Tile';
import useCollection from './hooks/useCollection';
import styled from "styled-components"

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 100px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
`;

function App() {
  const collection = useCollection();
  return (
    <>
      <Title>Real Monkey Collection</Title>
      <Grid>
        {collection?.map((nft) => {
          return (
            <Tile nft={nft} />
          )
        })}
      </Grid>
    </>
  );
}

export default App;
