import { useEffect, useState } from "react";
import axios from 'axios';
import BASE_URL from '../../global/baseURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function ContactUsMessages() {
  const [contactEmails, setContactEmails] = useState([]);

  useEffect(() => {
    console.log('useeffect executed')
    const getContactEmail = async () => {
      try{
      const response = await axios.get(`${BASE_URL}contactUs`);
      setContactEmails(response.data)
      } catch(error) {
        console.error('error fetching data:', error)
      }
    };
    getContactEmail() 
  }, [])

  function deleteMessageHandler(id){
    const deleteMessage = async () => {
      try{
      const response = await axios.delete(`${BASE_URL}contactUs/${id}`);
      setContactEmails(() => contactEmails.filter((contactEmail) => contactEmail._id != id))
      console.log('Response data:', response.data); // Added this line for debugging
      } catch(error) {
        console.error('error deleting element:', error)
      }
    };
    deleteMessage()

  }

  const contactEmailList = contactEmails.map(contactEmail => (
    
      <div className="email-container" key={contactEmail._id}>
        <div className='icon-container' onClick={() => deleteMessageHandler(contactEmail._id)}>
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
