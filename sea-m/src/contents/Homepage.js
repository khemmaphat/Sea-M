import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../img/middle-sea.png";
  
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
                <h1> You are the middle in the "Sea".</h1>
                <img src="./img/middle-sea.png"></img>
                <h5> Login-in to sail to nearby island.</h5>
                <p> hello world </p>
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