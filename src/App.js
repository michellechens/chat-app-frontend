import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import './style.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Join />} />
                <Route path="/chat" element={<Chat location={window.location} />} />
            </Routes>
        </Router>
    );
};

export default App;
