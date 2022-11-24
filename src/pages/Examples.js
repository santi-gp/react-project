import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getAllUsers } from '../components/content/users'
import Counter from '../components/content/Math/Counter'
import Toggle from '../components/content/Toggle'
import Factorial from '../components/content/Math/Factorial'
import Fibonacci from '../components/content/Math/Fibonacci'
import SolveQuadraticEqn from '../components/content/Math/SolveQuadraticEqn';

function Clases() {
  const users = getAllUsers();
  const styleGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    styleLi: {
      marginTop: '2%'
    },
    styleA: {
      color: '#2588a7'
    }
  };
  return (
    <>
      <section>
        <article style={styleGrid}>
          <div>
            <h2>Películas</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id} style={styleGrid.styleLi}>
                  <Link
                    to={user.id.toString()}
                    style={styleGrid.styleA}>
                    {user.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='px-2'>
            <h3>Seleccionar película</h3>
            <Outlet />
          </div>
        </article>
      </section>
      <aside>
        <div>
          <Counter />
        </div>
        <div>
          <Factorial />
        </div>
        <div>
          <Fibonacci />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <SolveQuadraticEqn />
        </div>
      </aside>
    </>

  )
}

export default Clases