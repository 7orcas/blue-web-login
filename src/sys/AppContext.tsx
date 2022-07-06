import { FC, createContext, useState } from 'react'
import api from './api';
import useAxiosFetch from './useAxiosFetch';

interface Props {
  children: any
}

export interface AppContextI {
    userid: any
    setUserid (txt: string): any
    pw: any
    setPw (txt: string): any
    org: number
    login : any
  }
  
const AppContext = createContext<AppContextI | null>(null)

export const AppContextProvider: FC<Props> = ({ children }) => {

    const [userid, setUserid] = useState ('')
    const [pw, setPw] = useState ('')

    const login = async () => {
      console.log('loggin in with ' + userid + ' / ' + pw)
      setPw('')
      const attempt = { u: userid, p : pw };
      try {
        const response = await api.post('/login', attempt);
        console.log(response)

        //jump to application
        //window.location.href = 'http://localhost:8080/blue-web/'
        window.location.href = response.data

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
      login: login
    }

    return (
        <AppContext.Provider value={appValue}>
          { children }
        </AppContext.Provider>
    )    
}
  
export default AppContext;