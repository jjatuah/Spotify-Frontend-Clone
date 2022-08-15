import React from 'react';
import "./Login.css"
import {loginUrl} from "../spotify"

const Login = () => {
  return ( 
    <div className="login">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png" alt="spotify logo" />
      <div className="fade"></div>
      <a href={loginUrl}>Login With Spotify</a>
    </div>
   );
}
  
export default Login;