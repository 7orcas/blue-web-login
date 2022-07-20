import { FC, createContext, useState, useEffect } from 'react'
import api from './api'

interface Props {
  children: any
}

interface LangInfo {
  key: string;
  label: string;
}

export interface AppContextI {
    userid: any
    setUserid (txt: string): any
    pw: any
    setPw (txt: string): any
    org: number
    login : any
    ping : any
    lang : Array<LangInfo>
  }
  
const AppContext = createContext<AppContextI | null>(null)

export const AppContextProvider: FC<Props> = ({ children }) => {

    const [userid, setUserid] = useState ('')
    const [pw, setPw] = useState ('')
    const [lang, setLang] = useState <LangInfo[]>([])
    
    //Load language package
    useEffect(() => {

      const initialise = async () => {
        try {
          if (lang.length > 0) return

          var params = new URLSearchParams()
          params.append('lang', 'en')

          const response = await api.get(`/lang/login-pack?${params}`, {withCredentials: true})
          console.log('initialise: ' + response.data)
          
          console.log('1 ')
          let labels : Array<LangInfo> = []
          for (const l of response.data) {
            console.log('1 l: ' + l._code + ' ' + l.label)
            labels.push ({key : l._code, label : l.label})
          }
          // setLabel(lang)
          console.log('2 ')
          for (const l of labels) {
            console.log (l.key + ' ' + l.label)
          }
          
          setLang(labels)

        } catch (err : any) {
          console.log(err.message)
        } finally {
          
        }
      }
      initialise()
    })


    const login = async () => {
      console.log('loggin in with id: "' + userid + '", pw: "' + pw + '"')
      setPw('')
      const attempt = { u: userid, p : pw };
      try {
        console.log('1')
        const response = await api.post('/login/web', attempt);
        console.log('2')
        console.log(response)
        console.log(response.data.WebClientMainUrl + '?init=' + response.data.WebLoginInitUrl + '&sid=' + response.data.SessionID)

        window.location.href = response.data.WebClientMainUrl + '?init=' + response.data.WebLoginInitUrl + '&sid=' + response.data.SessionID

      } catch (err : any) {
          console.log(`Error: ${err.message}`);
      }
    }

    const ping =async () => {
      try {
        const response = await api.get('/login/ping');
        console.log(response)
      } catch (err : any) {
          console.log(`Error: ${err.message}`);
      }
    }

    const appValue: AppContextI = {
      userid: userid,
      setUserid: setUserid,
      pw: pw,
      setPw: setPw,
      org: 1,
      login: login,
      ping: ping,
      lang: lang
    }

    return (
        <AppContext.Provider value={appValue}>
          { children }
        </AppContext.Provider>
    )    
}
  
export default AppContext;