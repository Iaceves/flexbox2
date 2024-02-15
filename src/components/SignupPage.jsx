import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import BASE_URL from "../../global/baseURL";
import axios from "axios";
import React from "react";

function SignupPage(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    } 


    function signupHandler(e){
        e.preventDefault()
        const newUser = async () => {
                const response = await axios.post(`${BASE_URL}user`, {
                    "username": formData.username,
                    "email": formData.email,
                    "password": formData.password
                })
                response
        }
        newUser()
        setFormData({
            ...formData,
            username: '',
            email: '',
            password: ''
        })
    }  

    function returnToLoginhandler(){
        navigate('/login')
    }

    return(
        <div className="signup-container">
            <h1 className='h1'>Signup</h1>
            <div>
                <h1>Username:</h1>
                <input name='username' placeholder="username" type='text' value={formData.username} onChange={handleInputChange} />
            </div>
            <div>
                <h1>Email</h1>
                <input name='email' placeholder="Email" type="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
                <h1>Password:</h1>
                <input name='password' placeholder="password" type="password" value={formData.password} onChange={handleInputChange}/>
            </div>
            <div>
                <button onClick={signupHandler} >Signup</button>
                <button onClick={returnToLoginhandler}>Login</button>
            </div>
        </div>
    )
}

export default SignupPage;