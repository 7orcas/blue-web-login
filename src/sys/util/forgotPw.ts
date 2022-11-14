import api from '../api'

/*
  Message the server an forgotten password request
  
  [Licence]
  Created 14.11.22
  @author John Stewart
 */
const forgotPw = async (email : string, setErr : any) => {

  try {
    const reset = { email: email };

    const response = await api.post('/login/forgotpw', reset)
   
    if (response.data.error) {
      setErr(response.data.error)
      return
    }

    setErr(response.data.data)

  } catch (err : any) {
    setErr(err)
    console.log(`Error: ${err.error}`)
  }
}

export default forgotPw