export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://react-spotify-frontend.web.app/" 
const clientID = "d73efa9a44d54a2c8f7474b401069871";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);

    return initial;
  }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;