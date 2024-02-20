import '../App.css';

function ContactForm ({submitHandler, handleInputChange, formData}){

  
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
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default ContactForm;