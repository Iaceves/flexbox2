import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import BASE_URL from '../../global/baseURL'


function Section() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getEmail = async () => {
      try{
      const response = await axios.get(`${BASE_URL}users`);
      setUsers(response.data)
      } catch(error) {
        console.error('error fetching data:', error)
      }
    };
    getEmail()
  }, [setUsers])
  
  return(
    <section>
      {users.map((user) => (
        <div className='container'>
          <div className="box">
            <h1>{user.email}</h1>
            <p>some text in title 1. & here more text</p>
          </div>
        </div>
      ))
      }
    </section>
  )
}
export default Section