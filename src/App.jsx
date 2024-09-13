import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventManagement from './components/EventManagement';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">社区管理系统</h1>
        <Routes>
          <Route path="/" element={<EventManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;