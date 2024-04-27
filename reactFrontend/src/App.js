import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Update from './Update';
import Post from './Post';
import Fetch from './Fetch';
import Delete from './Delete';
import Home from './Home'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/fetch">Fetch</Link>
            </li>
            <li>
              <Link to="/delete">Delete</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<Update />} />
          <Route path="/post" element={<Post />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
