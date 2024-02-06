import { useState } from 'react';
import '../App.css'

function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onPress(){
        console.log("I have been Click!!!")
        console.log(email, password)
    }


    return(
        <div className='login-container'>
            <h1>Login</h1>
            <div>
                <h1>Email:</h1>
                <input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <h1>Password:</h1>
                <input placeholder="Password" type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={onPress}>Login</button>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default LoginPage;