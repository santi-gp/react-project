import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Inicio from './pages/Inicio'
import Hooks from './pages/Hooks'
import Clases from './pages/Clases'
import { ReactForm, HookForm, ReactFormik } from './pages/hooksPages';
import User from './components/content/User';
import { Crud } from './components/content/crud/Crud';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='hooks' element={<Hooks />} >
            <Route index element={
              <article>
                <Crud />
              </article>
            } />
            <Route path='reactForm' element={<ReactForm />} />
            <Route path='reactFormik' element={<ReactFormik />} />
            <Route path='hookForm' element={<HookForm />} />
          </Route>
          <Route path='clases' element={<Clases />} >
            <Route path=":userId" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
