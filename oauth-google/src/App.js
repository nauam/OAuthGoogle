import logo from './logo.svg';
import './App.css';

import GoogleLogin from 'react-google-login';
import { Profiler, useState } from 'react';

function App() {

    const [email, setEmail] = useState()
    const [familyName, setFamilyName] = useState()
    const [givenName, setGivenName] = useState()
    const [googleId, setGoogleId] = useState()
    const [profilePic, setProfilePic] = useState()
    const [name, setName] = useState()
    const [tokenId, setTokenId] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const responseGoogle = (response) => {
        console.log(response);
        const {
            profileObj: { email, familyName, givenName, googleId, imageUrl, name },
        } = response

        setEmail(email);
        setFamilyName(familyName);
        setGivenName(givenName);
        setGoogleId(googleId);
        setProfilePic(imageUrl);
        setName(name);
        setTokenId(tokenId);
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <GoogleLogin
                    clientId="763138517946-kn0fubg11r4t6nm0ilol47aepreg0fdp.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                {isLoggedIn ? <div>
                    <h1>Informações do Usuário</h1>
                    <img src={profilePic} alt="Profile" />
                    <p>Nome: {name}</p>
                    <p>Email: {email}</p>
                    <p>GoogleId: {googleId}</p>
                </div> : ''}
            </header>
        </div>
    );
}

export default App;
