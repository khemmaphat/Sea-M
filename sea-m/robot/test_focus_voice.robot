*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${HOST}                 localhost
${PORT}                 3000
${BROWSER}              chrome
${SERVER}               http://${HOST}:${PORT}
${DELAY}                0
${username_text}        31kezuu765f6kappx6tnvoja57iy
${password_text}        07112544

*** Keywords ***
Open Browser To Login Page
    Open Browser     ${SERVER}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Title Should Be        Sea-M

Login
    Click Element    id:login-button
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    
Login with Shortcutkey
    Press Keys    id:login-button    SHIFT+I
    Wait Until Element Is Visible    id:login-username
    Input Text     id:login-username     ${username_text} 
    Input Password     id:login-password     ${password_text}
    Click Element    id:login-button
    Wait Until Element Is Visible    //*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]
    Click Element    xpath://*[@id="root"]/div/div[2]/div/div/div[3]/button/div[1]

*** Test Cases ***
Login
    Open Browser To Login Page
    Login
    Wait Until Element Is Visible    id:logout-button
    Press Keys    id:logout-button    SHIFT+O
    Wait Until Element Is Visible    id:h1
    Close Browser

Check Focus&Voice Login Page
    Open Browser To Login Page
    Press Keys    None    TAB
    Element Should Be Focused    id:h1
    Press Keys    None    TAB
    Element Should Be Focused    id:h3
    Press Keys    None    TAB
    Element Should Be Focused    id:p
    Press Keys    None    TAB
    Element Should Be Focused    login-button

Check Focus&Voice Logout Homepage
    Login
    Wait Until Element Is Visible    id:logout-button
    Press Keys    None    TAB
    Element Should Be Focused    id:logout-button

Check Focus&Voice Git Homepage
    Press Keys    None    TAB
    Element Should Be Focused    id:git-button

Check Focus&Voice AboutUs Homepage
    Press Keys    None    TAB
    Element Should Be Focused    id:ab-button
    Press Keys    None    RETURN
    Press Keys    None    TAB
    Element Should Be Focused    id:ab1
    Press Keys    None    TAB
    Element Should Be Focused    id:ab2
    Press Keys    None    TAB 
    Element Should Be Focused    id:ab3
    Press Keys    None    TAB
    Element Should Be Focused    id:ab4
    Press Keys    None    TAB 
    Element Should Be Focused    id:ab5
    Press Keys    None    TAB 
    Element Should Be Focused    id:ab6
    Press Keys    None    TAB 
    Element Should Be Focused    id:ab7
    Press Keys    None    TAB 
    Element Should Be Focused    id:ab8
    Press Keys    None    SHIFT+C

Check Focus&Voice Music Homepage
    Press Keys    None    TAB
    Element Should Be Focused    id:ms
    Press Keys    None    RETURN
    Element Should Be Enabled    id:spotify
    Press Keys    None    TAB
    Element Should Be Focused    id:ms1
    Press Keys    None    TAB
    Element Should Be Focused    id:ms2
    Click Element    id:ms3
    Press Keys    None    TAB
    Element Should Be Focused    id:1
    Press Keys    None    TAB
    Element Should Be Focused    id:2
    Press Keys    None    TAB
    Element Should Be Focused    id:3
    Press Keys    None    SHIFT+C
    Close Browser

Test Music-Playlist
    Open Browser To Login Page
    Login
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:music-box
    Wait Until Element Is Visible    id:close-modal
    Click Element    id:1
    Sleep     5s
    Select Frame     id:spotify
    Current Frame Should Contain            Morning Music
    Unselect Frame
    Click Element    id:2
    Sleep     5s
    Select Frame     id:spotify
    Current Frame Should Contain          RELAX CHILLOUT MUSIC, Relaxing Music, Study Music, Lofi, Ambient Music, Chill Music,Background Music
    Unselect Frame
    Click Element    id:3
    Sleep     5s
    Select Frame     id:spotify
    Current Frame Should Contain          This is Chill out - Sunset Beach Chill out Playlist
    Unselect Frame
    Click Element    id:close-modal
    Close Browser

Test About-us
    Open Browser To Login Page
    Login
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:about-us
    Wait Until Element Is Visible    id:close-modal
    Click Element    id:close-modal
    Close Browser

Test github
    Open Browser To Login Page
    Login
    Wait Until Element Is Visible    id:logout-button
    Click Element    id:github
    sleep    5s
    Close Browser

Test All-shortcut-keys
    Open Browser To Login Page
    Login with Shortcutkey
    Wait Until Element Is Visible    id:music-box
    Press Keys    id:music-box    SHIFT+M
    Wait Until Element Is Visible    id:close-modal
    Press Keys    id:close-modal    SHIFT+C
    Press Keys    id:about-us    SHIFT+A
    Wait Until Element Is Visible    id:close-modal
    Press Keys    id:close-modal    SHIFT+C
    Press Keys    id:github    SHIFT+V
    Wait Until Element Is Visible    id:logout-button
    Press Keys    id:logout-button    SHIFT+O
    Wait Until Element Is Visible    id:login-button
    Close Browser