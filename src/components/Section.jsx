import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

function Section() {
  // const [username, setusername] = useState([])


  // useEffect(() => {
  //   const getEmail = async () => {
  //     const response = await (await axios.get('http://localhost:3000/user/65c1c5d135ec101f477b5594')).data.email
  //     setusername(response)
  //     console.log(response)
  //   }
  //   getEmail()
  // }, [])
  
  return(
        <section>
          <div className='container'>
            <div className="box">
              <h1>Title 1</h1>
              <p>some text in title 1. & here more text</p>
            </div>
            <div className="box">
              <h1>Title 2</h1>
              <p>more text in title 2. & here more text</p>
            </div>
            <div className="box">
              <h1>Title 3</h1>
              <p>more text in title 3. & here more text</p>
            </div>
          </div>
        </section>
    )
}
export default Section