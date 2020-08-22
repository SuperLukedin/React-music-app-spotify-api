import React from 'react'
import './Login.css';
import { loginUrl } from '../../services/spotify';

function Login() {
    return (
        <div className="login">
            <img src="https://www.basspromotions.com/wp-content/uploads/2019/05/Spotify_Logo_RGB_White.png"
                alt="spotify img"
            />
            <a href={loginUrl}>Login with Spotify</a>  
        </div>
    )
}

export default Login
