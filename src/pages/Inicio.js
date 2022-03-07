import React from 'react'
import MortyApi from '../components/content/MortyApi'
//import List from '../components/content/List'
import SearchText from '../components/content/SearchText'
//import Lightbulb from '../components/content/Lightbulb'

function Inicio() {
  return (
    <div>
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