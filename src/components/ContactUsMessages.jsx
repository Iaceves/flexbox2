import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'; 
import '../App.css';

function ContactUsMessages({contactMessages, messageHandler}) {

  const contactEmailList = contactMessages.map(contactEmail => (
    
      <div className="email-container" key={contactEmail._id}>
        <div className='icon-container' onClick={() => messageHandler(contactEmail._id)}>
          <a>
            <FontAwesomeIcon className="icon" icon={faTrashCan} />
          </a>
        </div>
        <h1>{contactEmail.email}</h1>
        <div>
          <p>{contactEmail.contactQuestions}</p>
        </div>
      </div>
    
  ))

  return (
    <div>
      <ul>
          {contactEmailList}
      </ul>    
    </div>
  );
}

export default ContactUsMessages;
