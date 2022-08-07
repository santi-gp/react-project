import React from 'react'
import MortyApi from '../components/content/MortyApi'
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
        <MortyApi />
      </article>
    </div>

  )
}

export default Inicio