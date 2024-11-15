import Input from '../../components/Input/Input.jsx'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton.jsx'
import '../LoginPage/LoginPage.css'

function RegisterPage() {
    return (
        <>
            <div id="page-container">
                <div id="login-form">
                    <img src="/AppLogo.png" alt="AppLogo" />
                    <h2>Registration Form</h2>
                    <Input name="Email:" type="text" />
                    <Input name="Name:" type="text" />
                    <Input name="Password:" type="password" />
                    <ConfirmButton text="Sign in" />
                </div>
            </div>
        </>
    )
}

export default RegisterPage
