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
  const styleMorty = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    flexWrap: 'nowrap',
    styleLi: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '2% 0'
    }
  }
  return (
    <>
      <h3 className='txt-center mb-2 color-1'>Rick and Morty</h3>
      <ul style={styleMorty}>
        {mortys.map((morty) => (
          <li key={morty.id} style={styleMorty.styleLi}>
            <img style={{ width: '60%' }} src={morty.image} alt={morty.name} />
            <p className='my-2 color-1'>{morty.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MortyApi
