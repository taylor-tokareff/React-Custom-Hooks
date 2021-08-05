import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../FuturamaAPI';



export const UseQuotes = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
    setLoading(false);
  }, []);

  return { characters, loading };

};
