import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import BASE_URL from "../../global/baseURL";
import axios from "axios";
import React from "react";

function SignupPage(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const navigate = useNavigate();

    function returnToLoginhandler(){
        navigate('/login')
    }

    function signupHandler(e){
        e.preventDefault()
        const newUser = async () => {
            console.log(username, email, password)
                const response = await axios.post(`${BASE_URL}user`, {
                    "username": username,
                    "email": email,
                    "password": password
                })
                console.log(response)
        }
        newUser()
    }    

    return(
        <div className="signup-container">
            <h1 className='h1'>Signup</h1>
            <div>
                <h1>Username:</h1>
                <input name='username' placeholder="username" type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
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
                <button onClick={signupHandler} >Signup</button>
                <button onClick={returnToLoginhandler}>Login</button>
            </div>
        </div>
    )
}

export default SignupPage;