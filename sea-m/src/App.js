import React, { useState, useEffect } from 'react';
import 'App.css';


import { BrowserRouter as Router, Routes, Route 
} from "react-router-dom";

import Login from 'auth/Login';
import Homepage from 'contents/Homepage';
import { setClientToken } from 'contents/spotify';


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
  ) : (
    <Router>
      <Routes>
        <Route path="/"
          element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
