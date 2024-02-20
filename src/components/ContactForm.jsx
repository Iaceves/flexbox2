import { Button } from "react-bootstrap";
import { useState } from "react";
import '../App.css';
import BASE_URL from "../../global/baseURL";
import axios from "axios";


function ContactForm (){

    const [formData, setFormData] = useState({
        email: '',
        contactQuestion: ''
    })

    function onSubmitHandler(e){
        e.preventDefault()
        const newContactEmail = async () => {
                const response = await axios.post(`${BASE_URL}contactUs`, {
                    "email": formData.email,
                    "contactQuestions": formData.contactQuestion,
                })
                response
        }
        newContactEmail()
        setFormData({
            ...formData,
            email: '',
            contactQuestion: ''
        })
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    return(
        <div className='contact-container'>
            <h1 className='h1'>Contact Us</h1>
            <div className='email-input'>
                <h1>Email:</h1>
                <input name="email" type="text" placeholder="Your Email Here" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className='textarea-input'>
                <h1>Write Text Here:</h1>
                <textarea name="contactQuestion" type="textarea" placeholder="Write Your Question Here." value={formData.contactQuestion} onChange={handleInputChange} />
            </div>
            <button onClick={onSubmitHandler}>Submit</button>
        </div>
    )
}

export default ContactForm;