import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StaticPage from './pages/StaticPage';
import { get } from './services/menuService';
import { findBySlug } from './services/pageService';

function App() {
    const [page, setPage] = useState([]);
    const [menu, setMenu] = useState([]);
    const location = window.location.pathname;

    useEffect(() => {
        async function getData() {
            const page = await findBySlug(location);
            setPage(page);

            const menu = await get();
            setMenu(menu);
        }

        getData();
    }, [location]);

    return (
        <Router>
            <Header menu={ menu } />
            <Routes>
                <Route path={ location } element={ <StaticPage page={page} /> } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
