import { LabelI } from '../Interfaces'
import api from '../api'
import User from './user'
import { JsonResponseI } from './jsonResponseI'

const loadLabels = async (user : User, setLabels : any, setErr : any) => {

  try {
    var params = new URLSearchParams()
    let lang : string = user.lang !== null ? user.lang : 'en'
    params.append('lang', lang)

    const response = await api.get(`/lang/login-pack?${params}`, {withCredentials: true})
    const rtn = response.data

    if (rtn.returnCode !== JsonResponseI.ok){
      setErr(rtn.message)
      return
    }
    setErr('')

    let labels : Array<LabelI> = []
    for (const l of rtn.data) {
      labels.push ({key : l.code, label : l.label})
    }

    setLabels(labels)

  } catch (err : any) {
    console.log(err.message)

  } finally {

  }
}

export default loadLabels
