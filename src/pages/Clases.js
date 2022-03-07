import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getAllUsers } from '../components/content/users'
import Counter from '../components/content/Counter'
import Toggle from '../components/content/Toggle'
import Factorial from '../components/content/Factorial'
import Fibonacci from '../components/content/Fibonacci'

function Clases() {
  const users = getAllUsers();
  const styleGrid = {
    display: 'grid',
    gridTemplateColumns:'1fr 1fr',
    styleLi:{
      marginTop:'2%'
    },
    styleA:{
      color:'#1d213a'
    }
  };
  return (
    <>
      <section style={styleGrid}>
        <article>
          <h2>Películas</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} style={styleGrid.styleLi}>
                {/*<Link to={"/" + id} >{user.title}</Link>*/}
                <Link to={user.id.toString()} style={styleGrid.styleA}>{user.title}</Link>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Añadir película</h3>
          <Outlet />
        </article>
      </section>
      <aside>
        <div>
          <Counter />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <Factorial />
        </div>
        <div>
          <Fibonacci />
        </div>
      </aside>
    </>

  )
}

export default Clases