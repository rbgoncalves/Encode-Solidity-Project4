import React from 'react';
import './App.css';
import useCollection from './hooks/useCollection';

function App() {
  const collection = useCollection();
  return (
    <div>
      {collection?.map((nft) => {
        return <p>{nft.name}</p>
      })}
    </div>
  );
}

export default App;
