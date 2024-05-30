import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import './index.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/search" component={Search} />
      </Routes>
    </Router>
  );
}
export default App;
