import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input.jsx'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton.jsx'
import '../LoginPage/LoginPage.css'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div id="page-container">
                <div id="login-form">
                    <img src="/AppLogo.png" alt="AppLogo" />
                    <h2>Registration Form</h2>
                    <Input
                        name="Email:"
                        type="email"
                        value={email}
                        function={(event) => setEmail(event.target.value)}
                    />
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
                    <ConfirmButton text="Sign in" />

                    <div className="link-container">
                        <Link className="custom-link" to='/login'>Back to Login Page.</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
