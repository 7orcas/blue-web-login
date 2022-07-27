import { FC, createContext, useState, useEffect } from 'react'
import { LangI, LabelI, OrgI } from './Interfaces'
import loadLangs from './util/loadLangs'
import loadLabels from './util/loadLabels'
import loadOrgs from './util/loadOrgs'
import User from './util/user'

/**
 * 
 * [Licence]
 * @author John Stewart
 */

interface Props {
  children: any
}
  
export interface AppContextI {
  user: any
  setUser: any
  langs : LangI[]
  labels : LabelI[]
  orgs : OrgI[]
}

const AppContext = createContext<AppContextI | null>(null)

export const AppContextProvider: FC<Props> = ({ children }) => {

  const [load, setLoad] = useState <boolean>(false) //Control initial load
  const [user, setUser] = useState (new User(null))
  const [langs, setLangs] = useState <LangI[]>([])
  const [labels, setLabels] = useState <LabelI[]>([])
  const [orgs, setOrgs] = useState <OrgI[]>([])
      
  // Load language and orgs data, setup parameters at page load
  useEffect(() => {
    if (load === true) return
    setLoad(true)

    const url = new URL (window.location.href)
    let login = new User(user)
    login.userid = url.searchParams.get("u")
    login.pw = url.searchParams.get("p")
    // login.lang = url.searchParams.get("l")
    
    //Load langauges 
    const loadLangsX = async () => {
      let langs = await loadLangs() || []
      setLangs (langs)
      
      //First set default
      langs.forEach((l) => {
        if (l.dvalue === true){
          login.lang = l.label
        }
      })
      
      //Now test if passed in lang is valid
      langs.forEach((l) => {
        if ('' + l.label === url.searchParams.get("l")){
          login.lang = l.label
        }
      })
      
      setUser(login)
    }
    loadLangsX()

    //Load label package
    const loadLabelsX = async () => {
      setLabels (await loadLabels() || [])
    }
    loadLabelsX()

    //Load organisations
    const loadOrgX = async () => {
      let orgs = await loadOrgs() || []
      setOrgs (orgs)

      //First set default
      orgs.forEach((o) => {
        if (o.dvalue === true){
          login.setOrgNumber(o.value)
        }
      })

      //Now test if passed in org is valid
      orgs.forEach((o) => {
        if ('' + o.value === url.searchParams.get("o")){
          login.setOrgNumber(o.value)
        }
      })

      setUser(login)
    }
    loadOrgX()
  })
  
  const appValue: AppContextI = {
    user: user,
    setUser: setUser,
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