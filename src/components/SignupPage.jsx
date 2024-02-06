import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import BASE_URL from "../../global/baseURL";

function SignupPage(){
    const [signUp, setSignUp] = useState({})

    useEffect(() => {
        const signingUp = async () => {
            const response = await (axios.post(`${BASE_URL}user`))
            setSignUp(response)
            console.log(response)
        }
        signingUp
    },[])

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