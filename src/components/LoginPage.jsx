import '../App.css'

function LoginPage(){
    return(
        <div className='login-container'>
            <h1>Login</h1>
            <div>
                <h1>Email:</h1>
                <input name='email' placeholder="Email" />
            </div>
            <div>
                <h1>Password:</h1>
                <input name="password" placeholder="Password" />
            </div>
            <div>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default LoginPage;