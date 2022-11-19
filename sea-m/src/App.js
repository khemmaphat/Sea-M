import React, { useState, useEffect } from 'react';
import './App.css';


import { BrowserRouter as Router, Routes, Route 
} from "react-router-dom";

import Login from './auth/Login';
import Feed from './contents/Feed';
import Library from './contents/Library';
import Favorites from './contents/Favorites';
import Player from './contents/Player';
import Trending from './contents/Trending';
import './contents/Homepage.css';
import Sidebar from './components/Sidebar';
import './components/Sidebar.css';
import { setClientToken } from './contents/spotify';


function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash){
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (      <Router>
        <div className='main-body'>
          <Sidebar />
        <Routes>
            <Route path="/"
              element={<Library />} /> 

            <Route path="/feed"
              element={<Feed />} />
            
            <Route path="/trending"
              element={<Trending />} />
            
            <Route path="/player"
              element={<Player />} />

            <Route path="/favorites"
              element={<Favorites />} />
  </Routes>
        </div>
        <script src="Text.js"></script>
      </Router>
      
  );
}

// const FontFace = () => {
//   return(
//       <div className="card">
//           <div className="font-face-gm">
//               test fonts
//           </div>
//       </div>
//   )
// }

export default App;
