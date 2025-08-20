import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Components/SideBar';
import Profile from './Components/Profile';
import Articles from './Components/Article';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="*" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
