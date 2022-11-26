import axios from 'axios';

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "595bace512e04ff5b3dcf6e7d4bbaa61";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

{/* endpoint of url */}
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join( 
    "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

{/* set client token function */}
export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

{/* delete token function */}
export const deleteToken = () => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + "";
        return config;
    });
};

export default apiClient;