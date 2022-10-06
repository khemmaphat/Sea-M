
import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";
  
function Homepage() {

    const naviagte = useNavigate();

    const loginPage = () => {
        naviagte('./Login')
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