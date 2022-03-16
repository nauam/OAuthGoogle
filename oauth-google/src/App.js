import logo from './logo.svg';
import './App.css';

import GoogleLogin from 'react-google-login';

function App() {

    const responseGoogle = (response) => {
        console.log(response);
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
            </header>
        </div>
    );
}

export default App;
