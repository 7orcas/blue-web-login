import { FC, createContext, useState, useEffect } from 'react'
import { LangI, LabelI, OrgI } from './Interfaces'
import loadLangs from './util/loadLangs'
import loadLabels from './util/loadLabels'
import loadOrgs from './util/loadOrgs'
import User from './util/user'

/**
 * TODO Module comment
 * [Licence]
 * @author John Stewart
 */

interface Props {
  children: any
}
  
export interface AppContextI {
  user: any
  setUser: any
  err: any
  setErr: any
  langs : LangI[]
  labels : LabelI[]
  orgs : OrgI[]
}

const AppContext = createContext<AppContextI | null>(null)

export const AppContextProvider: FC<Props> = ({ children }) => {

  const [user, setUser] = useState (new User(null))
  const [langs, setLangs] = useState <LangI[]>([])
  const [labels, setLabels] = useState <LabelI[]>([])
  const [orgs, setOrgs] = useState <OrgI[]>([])
  const [err, setErr] = useState ('')
      
  // Run Once: Load languages and orgs data
  useEffect(() => {

    const url = new URL (window.location.href)
    let login = new User(user)
    login.userid = url.searchParams.get("u")
    login.pw = url.searchParams.get("p")
        
    //Load langauges 
    const loadLangsX = async () => {
      let langs = await loadLangs(login, url, setErr) || []
      setLangs (langs)
      setUser(login)
    }
    loadLangsX()

    //Load organisations
    const loadOrgX = async () => {
      let orgs = await loadOrgs(login, url) || []
      setOrgs (orgs)
      setUser(login)
    }
    loadOrgX()

  }, []) 
  
  //Load label package
  useEffect(() => {
    const loadLabelsX = async () => {
      loadLabels(user, setLabels, setErr) 
    }
    loadLabelsX()
  }, [user.lang])

  const appValue: AppContextI = {
    user: user,
    setUser: setUser,
    err: err,
    setErr: setErr,
    langs: langs,
    labels: labels,
    orgs: orgs
  }

  return (
    <AppContext.Provider value={appValue}>
      { children }
    </AppContext.Provider>
  )    
}
  
export default AppContext;