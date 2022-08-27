import api from '../api'

const login = async (attempt : any, setErr : any) => {

  try {
    const response = await api.post('/login/web', attempt)
    
    if (response.data.message) {
      setErr(response.data.message)
      return
    }

    let data = response.data.data
    window.location.href = data.m + 
      '?base=' + data.b + 
      '&upload=' + data.u + 
      '&init=' + data.i + 
      '&sid=' + data.s

  } catch (err : any) {
    setErr(err)
    console.log(`Error: ${err.message}`)
  }
}

export default login