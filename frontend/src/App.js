import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StaticPage from './pages/StaticPage';
import { get } from './services/menuService';
import { findBySlug } from './services/pageService';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    const [page, setPage] = useState([]);
    const [menu, setMenu] = useState([]);
    const [location, setLocation] = useState(window.location.pathname);

    useEffect(() => {
        async function getPage() {
            const page = await findBySlug(location);
            setPage(page);
        }

        async function getMenu() {
            const menu = await get();
            setMenu(menu);
        }

        getMenu();
        getPage();
    }, [location]);

    return (
        <Router>
            <Header menu={menu} setLocation={setLocation} />
            <Routes>
                { page && (
                    <Route path={location} element={<StaticPage page={page} />} />
                )}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
