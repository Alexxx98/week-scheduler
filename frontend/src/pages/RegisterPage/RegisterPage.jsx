import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input/Input.jsx'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton.jsx'
import '../LoginPage/LoginPage.css'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate();

    function register() {

        const data = {
            'email': email,
            'username': username,
            'password': password,
        }

        if (password !== confirmPassword) {
            return alert('Passwords do not match')
        }

        axios.post('http://127.0.0.1:8000/auth/register/', data)
            .then(function (response) {
                console.log(response);
                navigate('/login');
                alert('User Registered successfuly');
            })
            .catch(function (error) {
                alert(error)
            })
    }

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
                        name="Username:"
                        type="text"
                        value={username}
                        function={(event) => setUserName(event.target.value)}
                    />
                    <Input
                        name="Password:"
                        type="password"
                        value={password}
                        function={(event) => setPassword(event.target.value)}
                    />

                    <Input
                        name="Confirm Password:"
                        type="password"
                        value={confirmPassword}
                        function={(event) => setConfirmPassword(event.target.value)}
                    />

                    <ConfirmButton text="Sign in" type="submit" func={register} />

                    <div className="link-container">
                        <Link className="custom-link" to='/login'>Back to Login Page.</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
