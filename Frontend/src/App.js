import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from 'Components/Home'

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Routes>
          <Route path="" element={Home}/>

        </Routes>
      </div>

    </div>
  );
}

export default App;
