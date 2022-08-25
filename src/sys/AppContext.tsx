import { FC, createContext, useState, useEffect } from 'react'
import { LangI, LabelI, OrgI } from './Interfaces'
import loadLangs from './util/loadLangs'
import loadLabels from './util/loadLabels'
import loadOrgs from './util/loadOrgs'
import User from './util/user'
import UrlSearchParams from './util/urlSearchParams'

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
  showLang: any
  langs : LangI[]
  labels : LabelI[]
  showOrg : any
  orgs : OrgI[]
  isAuto : any
  isTest : any
}

const AppContext = createContext<AppContextI | null>(null)

export const AppContextProvider: FC<Props> = ({ children }) => {

  const [user, setUser] = useState (new User(null))
  const [showLang, setShowLang] = useState (false)
  const [langs, setLangs] = useState <LangI[]>([])
  const [labels, setLabels] = useState <LabelI[]>([])
  const [showOrg, setShowOrg] = useState (false)
  const [orgs, setOrgs] = useState <OrgI[]>([])
  const [err, setErr] = useState ('')
  const [isAuto, setIsAuto] = useState (false)
  const [isTest, setIsTest] = useState (false)
      
  // Run Once: Load languages and orgs data
  useEffect(() => {

    const params = new UrlSearchParams()
    let login = new User(user)
    login.userid = params.userid
    login.pw = params.pw
    setShowOrg(params.showOrg)
    setIsAuto(params.auto)
    setIsTest(params.test)

    //Load langauges 
    const loadLangsX = async () => {
      let langs = await loadLangs(login, params, setErr) || []

      if (login.lang.length == 0) {
        for (var i=0;i<langs.length;i++) {
          if (langs[i].dvalue === true) {
            login.lang = langs[i].code
          }
        }
      }
      
      setLangs (langs)
      setShowLang(langs.length > 1)
      setUser(login)
    }
    loadLangsX()

    //Load organisations
    const loadOrgX = async () => {
      let orgs = await loadOrgs(login, params) || []
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
    showLang: showLang,
    langs: langs,
    labels: labels,
    showOrg: showOrg,
    orgs: orgs,
    isAuto: isAuto,
    isTest: isTest
  }

  return (
    <AppContext.Provider value={appValue}>
      { children }
    </AppContext.Provider>
  )    
}
  
export default AppContext;