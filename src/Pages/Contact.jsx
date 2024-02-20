import ContactForm from '../components/ContactForm';
import ContactUsMessages from '../components/ContactUsMessages';
import { useState, useEffect } from 'react';
import BASE_URL from '../../global/baseURL';
import axios from 'axios';

function Contact() {
  const [contactEmails, setContactEmails] = useState([]);
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
      
      setContactEmails([...contactEmails, response.data.contactMessage])
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

    useEffect(() => {
      getContactEmail()
    }, [])

    useEffect(() => {
      console.log("contactEmails has changed: ", contactEmails )
      
    }, [contactEmails])

    const getContactEmail = async () => {
      try{
      const response = await axios.get(`${BASE_URL}contactUs`);
      setContactEmails(response.data)
      } catch(error) {
        console.error('error fetching data:', error)
      }
    };

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

  return (
    <div>
      <div>
        < ContactForm submitHandler={onSubmitHandler} handleInputChange={handleInputChange} formData={formData}/>
      </div>
      <div>
        <ContactUsMessages contactMessages={contactEmails} messageHandler={deleteMessageHandler}/>
      </div>
    </div>
  );
}

export default Contact;
