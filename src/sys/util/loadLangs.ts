import { LangI } from '../Interfaces'
import api from '../api'

const loadLangs = async () => {

  try {
    const response = await api.get(`/lang/login-lang`, {withCredentials: true})
    
    let langs : Array<LangI> = []
    for (const l of response.data) {
      langs.push ({label : l._c, value : l.l, dvalue : l.d})
    }
    return langs

  } catch (err : any) {
    console.log(err.message)

  } finally {


  }
}

export default loadLangs
