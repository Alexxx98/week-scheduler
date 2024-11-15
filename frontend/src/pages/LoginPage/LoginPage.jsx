import Input from '../../components/Input/Input.jsx'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton.jsx'
import './LoginPage.css'

function LoginPage() {
    return (
        <>
            <div id="page-container">
                <div id="login-form">
                    <img src="/AppLogo.png" alt="AppLogo" />
                    <h2>Login Form</h2>
                    <Input name="Name:" type="text" />
                    <Input name="Password:" type="password" />
                    <ConfirmButton text="Login" />
                </div>
            </div>
        </>
    )
}

export default LoginPage
