import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input.jsx'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton.jsx'
import './LoginPage.css'

function LoginPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        return
    }

    return (
        <>
            <div id="page-container">
                <div id="login-form">
                    <img src="/AppLogo.png" alt="AppLogo" />
                    <h2>Login Form</h2>

                    <Input
                        name="Username:"
                        type="text"
                        value={userName}
                        function={(event) => setUserName(event.target.value)}
                    />
                    <Input
                        name="Password:"
                        type="password"
                        value={password}
                        function={(event) => setPassword(event.target.value)}
                    />
                    <ConfirmButton text="Login" type="submit" func={login} />

                    <div className="link-container">
                        <Link className="custom-link" to='/register'>Don't have account yet? Sign in here.</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
