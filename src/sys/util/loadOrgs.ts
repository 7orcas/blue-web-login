import { OrgI } from '../Interfaces'
import api from '../api'

const loadOrgs = async () => {

    try {
        const response = await api.get(`/org/org-list`, {withCredentials: true})
        
        let orgs : Array<OrgI> = []
        for (const l of response.data) {
            orgs.push ({label : l._c, value : l._o, dvalue : l.d})
        }
        return orgs

    } catch (err : any) {
        console.log(err.message)

    } finally {

    }
}

export default loadOrgs