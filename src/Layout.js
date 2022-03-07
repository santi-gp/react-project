import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function Layout() {
  return (
    <div className="App">
      <Header/>
      <main>
          <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
