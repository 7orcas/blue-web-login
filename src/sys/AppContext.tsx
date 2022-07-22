import { FC, createContext, useState, useEffect } from 'react'
import { LangI, OrgI } from './Interfaces'
import loadLang from './util/loadLang'
import loadOrg from './util/loadOrg'
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
  langRepo : LangI[]
  orgRepo : OrgI[]
}

const AppContext = createContext<AppContextI | null>(null)

export const AppContextProvider: FC<Props> = ({ children }) => {

  const [user, setUser] = useState (new User(null))
  const [lang, setLang] = useState <LangI[]>([])
  const [org, setOrg] = useState <OrgI[]>([])
  const [load, setLoad] = useState <boolean>(false)
      
  // Load language and orgs data, setup parameters at page load
  useEffect(() => {
    if (load === true) return
    setLoad(true)

    const url = new URL (window.location.href)
    let login = new User(user)
    login.userid = url.searchParams.get("u")
    login.pw = url.searchParams.get("p")
    
    //Load langauge package
    const load1 = async () => {
      let labels = await loadLang() || []
      setLang (labels)
    }
    load1()

    //Load organisations
    const load2 = async () => {
      let orgs = await loadOrg() || []
      setOrg (orgs)

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
    load2()
  })
  
  const appValue: AppContextI = {
    user: user,
    setUser: setUser,
    langRepo: lang,
    orgRepo: org
  }

  return (
    <AppContext.Provider value={appValue}>
      { children }
    </AppContext.Provider>
  )    
}
  
export default AppContext;