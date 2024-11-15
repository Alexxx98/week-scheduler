import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input.jsx'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton.jsx'
import './LoginPage.css'

function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div id="page-container">
                <div id="login-form">
                    <img src="/AppLogo.png" alt="AppLogo" />
                    <h2>Login Form</h2>

                    <Input
                        name="Name:"
                        type="text"
                        value={name}
                        function={(event) => setName(event.target.value)}
                    />
                    <Input
                        name="Password:"
                        type="password"
                        value={password}
                        function={(event) => setPassword(event.target.value)}
                    />
                    <ConfirmButton text="Login" />

                    <div className="link-container">
                        <Link className="custom-link" to='/register'>Don't have account yet? Sign in here.</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
