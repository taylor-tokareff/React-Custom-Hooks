/* eslint-disable max-len */
export const fetchDetail = async (name) => {
  const res = await fetch(`https://futuramaapi.herokuapp.com/api/characters/${name}`);
  console.log(res);
  const json = await res.json();
  console.log(json);

  return json;

};
