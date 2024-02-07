import { Button } from "react-bootstrap";


function ContactForm (){
    return(
        <div className='contact-container'>
            <h1 className='h1'>Contact Us</h1>
            <div className='email-input'>
                <h1>Email:</h1>
                <input placeholder="Your Email Here" />
            </div>
            <div className='textarea-input'>
                <h1>Write Text Here:</h1>
                <textarea placeholder="Write Your Question Here." />
            </div>
            <Button>Submit</Button>
        </div>
    )
}

export default ContactForm;