import React from 'react';
import './App.css';
import middlesea from './/img/middle-sea.png';

import {
  Routes ,Route 
} from "react-router-dom";

import Homepage from "./contents/Homepage"
import Login from './contents/Login';

function App() {
  return (
    <Router>
      
        <Switch>
          <Route path="/" 
            component={<Homepage/>} />
    
          <Route path="/Login" 
            component={<Login/>} />
        </Switch>
      
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
