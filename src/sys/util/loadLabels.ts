import { LabelI } from '../Interfaces'
import api from '../api'

const loadLabels = async () => {

  try {
    var params = new URLSearchParams()
    params.append('lang', 'en')

    const response = await api.get(`/lang/login-pack?${params}`, {withCredentials: true})
    
    let labels : Array<LabelI> = []
    for (const l of response.data) {
      labels.push ({key : l._c, label : l.l})
    }
    return labels

  } catch (err : any) {
    console.log(err.message)

  } finally {

  }
}

export default loadLabels
