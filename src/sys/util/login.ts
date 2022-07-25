import api from '../api'

const login = async (attempt : any) => {

  try {
    const response = await api.post('/login/web', attempt);
    
    window.location.href = response.data.m + 
      '?base=' + response.data.b + 
      '&init=' + response.data.i + 
      '&sid=' + response.data.s

  } catch (err : any) {
    console.log(`Error: ${err.message}`);
  }
}

export default login