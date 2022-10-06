import React from 'react';
import './App.css';
import middlesea from './/img/middle-sea.png';

import { Route, Routes, BrowserRouter 
} from "react-router-dom";

import Homepage from "./contents/Homepage"
import Login from './contents/Login';
import Register from './contents/Register';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/'
              element={<Homepage />} />
    
            <Route path="/Login" 
              element={<Login />} />

            <Route path="/Register" 
              element={<Register />} />
        </Routes>
      </BrowserRouter>
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
