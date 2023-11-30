import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import TerminalPage from './pages/TerminalPage';

import './css/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="terminal" element={<TerminalPage />} />

                <Route path="*" element={<>404</>} />
            </Route>
        </Routes>
    </BrowserRouter>,
)
