
function SignupPage(){
    return(
        <div className="signup-container">
            <h1>Signup</h1>
            <div>
                <h1>Username:</h1>
                <input name='username' placeholder="username" />
            </div>
            <div>
                <h1>Email</h1>
                <input name='email' placeholder="Email" />
            </div>
            <div>
                <h1>Password:</h1>
                <input name='password' placeholder="password" />
            </div>
            <div>
                <h1>Confirm Password:</h1>
                <input name='confirmPassword' placeholder="confirm password" />
            </div>
            <div>
                <button>Signup</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default SignupPage;