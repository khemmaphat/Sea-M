*** Settings ***
Library    SeleniumLibrary
Library    RequestsLibrary

*** Variables ***
${HOST}                 localhost
${PORT}                 3000
${BROWSER}              chrome
${SERVER}               http://${HOST}:${PORT}
${base_url}             https://api.spotify.com/v1/
${username_text}        a5609khem@gmail.com
${password_text}        088693632.Khema

*** Keywords ***


*** Test Cases ***
Test Login-button
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button