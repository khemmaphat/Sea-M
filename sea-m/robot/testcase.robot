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
${password_text}        0886593632.Khema

*** Keywords ***


*** Test Cases ***
Test Login
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:logout-button
    Close Browser

Test Non-Firsttime-Login
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:logout-button
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Close Browser

Test Music-Button
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:music-box
    Click Element    id:close-modal
    Click Element    id:logout-button
    Close Browser

Test Music-Playlist
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:music-box
    Wait Until Element Is Visible    id:close-modal
    Click Element    id:1
    Sleep     5s
    Click Element    id:2
    Sleep     5s
    Click Element    id:3
    Sleep     5s
    Click Element    id:close-modal
    Click Element    id:logout-button
    Close Browser

Test About-us
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:about-us
    Wait Until Element Is Visible    //*[@id="wrapper"]/div/div/div/div[1]
    Click Element    id:close-modal
    Close Browser

Test github
    Open Browser    ${SERVER}    ${BROWSER}
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:github
    sleep    5s
    Close Browser

Test All-shortcut-keys
    Open Browser    ${SERVER}    ${BROWSER}
    Press Keys    id:login-button    SHIFT+I
    Wait Until Element Is Visible    id:login-username
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Wait Until Element Is Visible    id:music-box
    Press Keys    id:music-box    SHIFT+O
    Press Keys    id:music-box    SHIFT+N
    Press Keys    id:about-us    SHIFT+K
    Press Keys    id:about-us    SHIFT+J
    Press Keys    id:github    SHIFT+V
    Click Element    id:logout-button
    Close Browser

