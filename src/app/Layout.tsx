import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import Label from './Label'
import Pw from './Pw'
import UserId from './UserId'
import getLang from '../sys/util/getLang'
import login from '../sys/util/login'
import ping from '../sys/util/ping'


const Layout = () => {

  const { user, userid, pw, setPw } = useContext(AppContext) as AppContextI
  
  const loginX = () => {
    setPw('')
    const attempt = { u: user.userid, p : user.pw };
    login (attempt)
  }

  return (
    <>
      <header>
        <h1>Blue</h1>
      </header>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <Label langkey='userid' />
            <UserId />
        </div>
        <div>
            <Label langkey='pw' />
            <Pw />
        </div>
        <button type="submit" onClick={() => loginX()}>{getLang('login')}</button>
      </form>
      <div>
        <p>{userid}</p>
        <p>{pw}</p>
        <button type="submit" onClick={() => ping()}>Ping</button>
      </div>
    </>
  )
}

export default Layout
