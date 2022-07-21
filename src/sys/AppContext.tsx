import { FC, createContext, useState, useEffect } from 'react'
import { LangInfoI } from './Interfaces'
import loadLang from './util/loadLang'
import User from './util/user'

interface Props {
  children: any
}
  
export interface AppContextI {
  user: any
  setUser: any
  userid: any
  setUserid (txt: string): any
  pw: any
  setPw (txt: string): any
  org: number
  langRepo : LangInfoI[]
}

const AppContext = createContext<AppContextI | null>(null)

export const AppContextProvider: FC<Props> = ({ children }) => {

    const [user, setUser] = useState (new User(null))
    const [userid, setUserid] = useState ('')
    const [pw, setPw] = useState ('')
    const [lang, setLang] = useState <LangInfoI[]>([])
    
    // Load language package at page load
    useEffect(() => {
      if (lang.length > 0) return
      const load = async () => {
        let labels = await loadLang() || []
        setLang (labels)
      }
      load();
    })

   
    const appValue: AppContextI = {
      user: user,
      setUser: setUser,
      userid: userid,
      setUserid: setUserid,
      pw: pw,
      setPw: setPw,
      org: 1,
      langRepo: lang
    }

    return (
        <AppContext.Provider value={appValue}>
          { children }
        </AppContext.Provider>
    )    
}
  
export default AppContext;