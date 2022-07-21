import { LangInfoI } from '../Interfaces'
import api from '../api'

const loadLang = async () => {

    try {
        var params = new URLSearchParams()
        params.append('lang', 'en')

        const response = await api.get(`/lang/login-pack?${params}`, {withCredentials: true})
        
        let labels : Array<LangInfoI> = []
        for (const l of response.data) {
            labels.push ({key : l._code, label : l.label})
        }
        return labels

    } catch (err : any) {
        console.log(err.message)

    } finally {

    }
}

export default loadLang