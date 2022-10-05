import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StaticPage from './pages/StaticPage';
import NotFoundPage from './pages/NotFoundPage';
import PageService from './services/pageService';

function App() {
    const [page, setPage] = useState([]);
    const [location, setLocation] = useState(window.location.pathname);

    useEffect(() => {
        async function getPage() {
            const page = await PageService.findBySlug(location);
            setPage(page);
        }

        getPage();
    }, [location]);

    return (
        <Router>
            <Header setLocation={setLocation} />
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
