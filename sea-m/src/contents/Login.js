import React from 'react'
import "../App.css";
import { useNavigate } from "react-router-dom";
  
function Login() {
    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }
    return (
        <>
            <div className="card" >
                <p>hello login</p>
            </div>
            <button  onClick={home}>
                Back to Home
            </button>
        </>
    )
}
  
export default Login
