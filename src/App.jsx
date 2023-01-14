import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Navbar from './components/Navbar';
import ShowsAndGigs from './ShowsAndGigs';
import NotFoundPage from './NotFoundPage';

export default function App() {
    return (
        <>
            <Navbar />
            <div className="dark m-4">
                <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/shows-and-gigs" element={<ShowsAndGigs />} />
                </Routes>
            </div>
        </>
    );
}