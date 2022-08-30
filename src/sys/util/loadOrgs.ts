import { OrgI } from '../Interfaces'
import api from '../api'
import User from './user'
import UrlSearchParams from './urlSearchParams'

const loadOrgs = async (user : User, params : UrlSearchParams) => {

  try {
    const response = await api.get(`/org/org-list`, {withCredentials: true})
    
    let orgs : Array<OrgI> = []
    for (const l of response.data) {
        orgs.push ({label : l.code, value : l.org, dvalue : l.x})
    }

    //Only select default if orgs are shown
    if (params.showOrg) {

      //First set default
      orgs.forEach((o) => {
        if (o.dvalue === true){
          user.setOrgNumber(o.value)
        }
      })
    }

    //Test if passed in org is valid
    orgs.forEach((o) => {
      if (o.value === params.org){
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