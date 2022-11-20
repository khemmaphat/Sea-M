*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${HOST}                 localhost
${PORT}                 3000
${BROWSER}              chrome
${SERVER}               http://${HOST}:${PORT}

*** Keywords ***


*** Test Cases ***
Test Login-button
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
