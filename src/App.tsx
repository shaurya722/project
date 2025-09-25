import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AgentServicePage from './pages/AgentServicePage';
import RedTeamPage from './pages/RedTeamPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agent" element={<AgentServicePage />} />
          <Route path="/red-team" element={<RedTeamPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;