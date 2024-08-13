import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';

const Home = () => {
  return <h1 className="red">Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
