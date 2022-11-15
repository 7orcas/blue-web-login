import api from '../api'

/*
  Log into the server
  Returned url or error

  [Licence]
  Created May '22
  @author John Stewart
 */
const login = async (attempt : any, setErr : any) => {

  try {
    const response = await api.post('/login/web', attempt)
   
    if (response.data.error) {
      setErr(response.data.error)
      return
    }

    let data = response.data.data
    window.location.href = data.locationHref + 
      '?base=' + data.baseUrl + 
      '&upload=' + data.uploadUrl + 
      '&init=' + data.initialisationUrl + 
      '&sid=' + data.sessionId

    //Testing
    console.log(data.locationHref + 
      '?base=' + data.baseUrl + 
      '&upload=' + data.uploadUrl + 
      '&init=' + data.initialisationUrl + 
      '&sid=' + data.sessionId)


  } catch (err : any) {
    setErr(err)
    console.log(`Error: ${err.error}`)
  }
}

export default login