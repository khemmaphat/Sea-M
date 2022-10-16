const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "595bace512e04ff5b3dcf6e7d4bbaa61";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join( 
    "%20"
)}&response_type=token&show_dialog=true`;