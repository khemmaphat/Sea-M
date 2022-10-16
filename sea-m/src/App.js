import React, { useState, useEffect } from 'react';
import './App.css';
import middlesea from './/img/middle-sea.png';

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


function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash);
  }, []);
  return (
      <Router>
        <div className='main-body'>
          <Login />
          {/*<Sidebar />
        <Routes>
            <Route path="/"
              element={<Library />} /> 
    
            <Route path="/Login" 
              element={<Login />} />

            <Route path="/Register" 
              element={<Register />} />

            <Route path="/feed"
              element={<Feed />} />
            
            <Route path="/trending"
              element={<Trending />} />
            
            <Route path="/player"
              element={<Player />} />

            <Route path="/favorites"
              element={<Favorites />} />
  </Routes> */}
        </div>
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
