import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";
  
function Homepage() {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate('./Login')
    }
    const registerPage = () => {
        navigate('./Register')
    }

    return (
        <>
            <div>
                <h1> hello world </h1>
                <button
                    onClick={loginPage}>Login
                </button>
                <button
                    onClick={registerPage}>Register
                </button>
            </div>
        </>
    )
}
  
export default Homepage