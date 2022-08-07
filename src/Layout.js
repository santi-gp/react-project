import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function Layout() {
    return (
        <div className="App">
            <Header />
            <main className='flex-column'>
                <div className='main_small margin-wrap flex-row f-grow1'>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;