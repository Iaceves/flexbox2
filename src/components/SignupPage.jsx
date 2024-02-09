import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

function SignupPage(){

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const navigate = useNavigate();

    function returnToLoginhandler(){
        navigate('/login')
    }

    function signupHandler(e){
        e.preventDefault()
    }    

    return(
        <div className="signup-container">
            <h1 className='h1'>Signup</h1>
            <div>
                <h1>Username:</h1>
                <input name='username' placeholder="username" type='text' value={username} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
                <h1>Email</h1>
                <input name='email' placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <h1>Password:</h1>
                <input name='password' placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value) }/>
            </div>
            <div>
                <h1>Confirm Password:</h1>
                <input name='confirmPassword' placeholder="confirm password" />
            </div>
            <div>
                <button onClick={signupHandler} >Signup</button>
                <button onClick={returnToLoginhandler}>Login</button>
            </div>
        </div>
    )
}

export default SignupPage;