/* eslint-disable max-len */
import React from 'react';
import { UseDetails } from '../app/state/Details';
import CharDetail from '../CharDetails';


const FuturamaDetails = () => {

  const { details, loading } = UseDetails();

  if (loading) return <h1>Loading...</h1>;
  return <CharDetail quote={details[0].quote} character={details[0].character} image={details[0].image} />;
};

export default FuturamaDetails;
