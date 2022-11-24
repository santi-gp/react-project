import React from 'react'
import ApiRest from '../components/content/ApiRest'
//import MortyApi from '../components/content/MortyApi'
//import List from '../components/content/List'
import SearchText from '../components/content/SearchText'
//import Lightbulb from '../components/content/Lightbulb'

function Inicio() {
  const styleMain = {
    width: '100%'
  }
  return (
    <div style={styleMain}>
      <article>
        {/*<List/>*/}
        <SearchText />
      </article>
      <article>
        {/*<Lightbulb/>*/}
        {/*<MortyApi />*/}
        <ApiRest/>
      </article>
    </div>

  )
}

export default Inicio