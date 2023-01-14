import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Navbar from './components/Navbar'
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
                </Routes>
            </div>
        </>
    );
}