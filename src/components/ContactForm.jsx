import { Button } from "react-bootstrap";

function ContactForm (){
    return(
        <div className='contact-container'>
            <h1>Contact Us</h1>
            <div classname='email-input'>
                <h1>Email:</h1>
                <input className="input" placeholder="Your Email Here" />
            </div>
            <div textarea-input>
                <h1>Write Text Here:</h1>
                <textarea className='textarea' placeholder="Write Your Question Here." />
            </div>
            <Button className='button'>Submit</Button>
        </div>
    )
}

export default ContactForm;