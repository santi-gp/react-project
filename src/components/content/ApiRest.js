import React, { useEffect, useState } from 'react'

function ApiRest() {
  const [apirest, setApiRest] = useState([]);
  const getApiRest = async () => {
    const data = await fetch(
      `https://restcountries.com/v3.1/subregion/america`
    );
    const apirest = await data.json();
    //console.log(apirest);
    return apirest;
  };
  useEffect(() => {
    getApiRest().then(rsp => setApiRest(rsp));
  }, []);
  const styleApiRest = {
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
      <h3 className='txt-center mb-2 color-1'>Banderas de América</h3>
      <ul style={styleApiRest}>
        {apirest.map((apiCountries) => (
          <li key={apiCountries.idd.suffixes[0]} style={styleApiRest.styleLi}>
            <img style={{ width: '60%'}} src={apiCountries.flags.svg} alt={apiCountries.name} />
            <p className='my-2 color-1'>{apiCountries.name.common}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ApiRest