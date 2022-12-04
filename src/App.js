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
  ShowColor,
  ValidateForm,
  PostBlog
}
  from './pages/hooksPages';
import Movie from './components/content/movies/Movie';
import { Crud } from './components/content/crud/Crud';
import Movies from './components/content/movies/Movies';
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
              </article>
            } />
            <Route path='reactForm' element={<ReactForm />} />
            <Route path='reactFormik' element={<ReactFormik />} />
            <Route path='hookForm' element={<HookForm />} />
            <Route path='validateForm' element={<ValidateForm />} />
            <Route path='githubUsers' element={<GitHubUsers />} />
            <Route path='postBlog' element={<PostBlog />} />
            <Route path='rating' element={<Rating />} />
            <Route path='changeColour' element={<ShowColor />} />
          </Route>
          <Route path='examples' element={<Examples />} >
            <Route index element={
              <article>
                <Movies />
              </article>
            } />
            <Route path=":movieId" element={<Movie />} />
            <Route path='calculators' element={<Calculators />} />
            <Route path='interLagrange' element={<Numerical />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
