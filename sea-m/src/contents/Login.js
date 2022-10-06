import React from 'react'
import "../App.css";
import { useNavigate } from "react-router-dom";
  
function Login() {
    const naviagte = useNavigate();
    const home = () => {
        naviagte('/');
    }
    return (
        <>
            <div className="card " >
                <p>hello login</p>
            </div>
            <button  onClick={home}>
                Back to Home
            </button>
        </>
    )
}
  
export default Login
