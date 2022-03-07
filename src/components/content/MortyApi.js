import React, { useEffect, useState } from 'react'


function MortyApi() {
  const [mortys, setMortys] = useState([]);
  const getMortys = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=1`
    );
    const mortys = await data.json();
    //console.log(mortys);
    return mortys.results;
  };
  useEffect(() => {
    getMortys().then(rsp => setMortys(rsp));
  }, []);
  const styleMorty={
    display:'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    flexWrap: 'nowrap',
    styleLi:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      margin: '2% 0'
    }
  }
  return (
    <>
      <h2>Rick and Morty</h2>
      <ul style={styleMorty}>
        {mortys.map((morty) => (
          <li key={morty.id} style={styleMorty.styleLi}>
            <img style={{width:'80%'}} src={morty.image} alt={morty.name} />
            <p>{morty.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MortyApi
