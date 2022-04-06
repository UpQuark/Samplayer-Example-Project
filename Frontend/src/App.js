import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from "react-router-dom";

import Home           from 'Components/Home';
import MainNavigation from 'Components/MainNavigation';

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <div className="container-fluid">
        <Routes>
          <Route path="" element={<Home/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
