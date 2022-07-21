import { useContext } from 'react'
import AppContext, { AppContextI } from '../AppContext'
import api from '../api'

const login = async (attempt : any) => {

    console.log('loggin in with id: "' + 
        attempt.userid + '", pw: "' + attempt.pw + '"')
    
    try {
        console.log('1')
        const response = await api.post('/login/web', attempt);
        console.log('2')
        console.log(response)
        console.log(response.data.WebClientMainUrl + '?init=' + response.data.WebLoginInitUrl + '&sid=' + response.data.SessionID)

        window.location.href = response.data.WebClientMainUrl + '?init=' + response.data.WebLoginInitUrl + '&sid=' + response.data.SessionID

    } catch (err : any) {
        console.log(`Error: ${err.message}`);
    }
}

export default login