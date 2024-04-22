// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './component/SIGN_IN/signin';
import Signup from './component/SIGN_UP/signup';


function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
