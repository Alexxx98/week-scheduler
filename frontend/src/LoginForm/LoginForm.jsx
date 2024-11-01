function handleGoogleLogin(url) {
    window.location.href = url
}

function LoginForm() {
    const loginURI = 'http://127.0.0.1:5000/login';

    return (
        <>
            <h1>Hello</h1>
            <button onClick={handleGoogleLogin(loginURI)}>Log in</button>
        </>
    )
}

export default LoginForm