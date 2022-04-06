import './App.scss';
import { Routes, Route } from "react-router-dom";

import MainNavigation from 'Components/MainNavigation';
import PlayerIndex    from "Components/PlayerIndex";
import Home           from 'Components/Home';
import Search         from "Components/Search/Search";
import Playlists      from "Components/Playlists/Playlists";

function App() {
  return (
    <div className="App">
      <div className="container mb-3" style={{height: "58px"}}>
        <MainNavigation/>
      </div>
      <div className="container-fluid">
        <Routes>
          <Route path={""} element={<PlayerIndex/>}>
            <Route path="" element={<Home/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="playlists" element={<Playlists/>}/>
          </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
