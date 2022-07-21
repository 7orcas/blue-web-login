import api from '../api'

const ping =async () => {
    try {
      const response = await api.get('/login/ping');
      console.log(response)
    } catch (err : any) {
        console.log(`Error: ${err.message}`);
    }
}

export default ping