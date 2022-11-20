*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${browser}          chrome
${url}       http://localhost:3000

*** Test Cases ***
TestCase1
    Open Browser    ${url}    ${browser}
    Click Element    id:login-button
