import Input from '../../components/Input/Input.jsx'
import './LoginPage.css'

function LoginPage() {
    return (
        <>
            <div id="page-container">
                <div id="login-form">
                    <Input name="Name:" type="text" />
                    <Input name="Password:" type="password" />
                </div>
            </div>
        </>
    )
}

export default LoginPage
