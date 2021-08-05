import React from 'react';
import CharacterList from '../CharacterList.jsx';
import { UseQuotes } from '../app/state/Quotes.js';



const FuturamaCharacters = () => {
  const { characters, loading } = UseQuotes();

  if (loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
};

export default FuturamaCharacters;

