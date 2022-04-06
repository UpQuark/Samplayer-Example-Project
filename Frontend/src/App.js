import './App.scss';
import { Routes, Route } from "react-router-dom";

import MainNavigation from 'Components/MainNavigation';
import Home           from 'Components/Home';
import Search         from "Components/Search/Search";
import Playlists      from "Components/Playlists/Playlists";

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <div className="container-fluid">
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="playlists" element={<Playlists/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
