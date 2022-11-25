import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home'
import Hooks from './pages/Hooks'
import Examples from './pages/Examples'
import {
  ReactForm,
  HookForm,
  ReactFormik,
  Rating,
  GitHubUsers,
  ShowColor
}
  from './pages/hooksPages';
import User from './components/content/movies/User';
import { Crud } from './components/content/crud/Crud';
import Movies from './components/content/movies/Movies';
import PostMain from './components/content/posts/PostMain';
import { Calculators, Numerical } from './pages/examplesPages';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hooks' element={<Hooks />} >
            <Route index element={
              <article>
                <Crud />
                <PostMain />
              </article>
            } />
            <Route path='reactForm' element={<ReactForm />} />
            <Route path='reactFormik' element={<ReactFormik />} />
            <Route path='hookForm' element={<HookForm />} />
            <Route path='githubUsers' element={<GitHubUsers />} />
            <Route path='rating' element={<Rating />} />
            <Route path='changeColour' element={<ShowColor />} />
          </Route>
          <Route path='examples' element={<Examples />} >
            <Route index element={
              <article>
                <Movies />
              </article>
            } />
            <Route path='calculators' element={<Calculators />} />
            <Route path='interLagrange' element={<Numerical />} />
            <Route path=":userId" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
