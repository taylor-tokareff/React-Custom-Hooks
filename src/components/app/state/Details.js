import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetail } from '../../ApiDetails';


export const UseDetails = () => {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { character } = useParams();

  console.log(character);

  useEffect(async () => {
    const details = await fetchDetail(character);
    setDetails(details);
    setLoading(false);

  }, []);

  return { details, loading };

};
