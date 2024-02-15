import { useEffect, useState } from "react";
import axios from 'axios';
import BASE_URL from '../../global/baseURL';
import '../App.css';

function ContactUsMessages() {
  const [contactEmails, setContactEmails] = useState([]);

  useEffect(() => {
    const getContactEmail = async () => {
      try{
      const response = await axios.get(`${BASE_URL}contactUs`);
      setContactEmails(response.data)
      } catch(error) {
        console.error('error fetching data:', error)
      }
    };
    getContactEmail()
  }, [setContactEmails])

  return (
    <div>
      {
        contactEmails.map((contactEmail) => (
  
          <div className="email-container">
            <h1>{contactEmail.email}</h1>
            <div>
              <p>{contactEmail.contactQuestions}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ContactUsMessages;
