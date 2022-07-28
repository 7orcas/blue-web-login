import { OrgI } from '../Interfaces'
import api from '../api'
import User from './user'

const loadOrgs = async (user : User, url : URL) => {

  try {
    const response = await api.get(`/org/org-list`, {withCredentials: true})
    
    let orgs : Array<OrgI> = []
    for (const l of response.data) {
        orgs.push ({label : l.c, value : l.o, dvalue : l.x})
    }

    //First set default
    orgs.forEach((o) => {
      if (o.dvalue === true){
        user.setOrgNumber(o.value)
      }
    })

    //Now test if passed in org is valid
    orgs.forEach((o) => {
      if ('' + o.value === url.searchParams.get("o")){
        user.setOrgNumber(o.value)
      }
    })

    return orgs

  } catch (err : any) {
      console.log(err.message)

  } finally {

  }
}

export default loadOrgs