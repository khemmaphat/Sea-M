import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";
  
function Homepage() {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate('./Login')
    }

    return (
        <>
            <div>
                <h1> hello world </h1>
                <button
                    onClick={loginPage}>Login
                </button>
            </div>
        </>
    )
}
  
export default Homepage