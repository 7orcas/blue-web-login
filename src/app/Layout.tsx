import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import Label from './Label'
import Pw from './Pw'
import Org from './Org'
import User from '../sys/util/user'
import UserId from './UserId'
import getLang from '../sys/util/getLang'
import login from '../sys/util/login'
import ping from '../sys/util/ping'

const Layout = () => {

  const { user, setUser } = useContext(AppContext) as AppContextI
  
  const loginX = () => {
    if (!user.isValid()){
      return;
    }

    let x = new User(user)
    x.pw = ''
    setUser(x)
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
        <div>
            <Label langkey='org' />
            <Org />
        </div>
        <button 
          disabled={!user.isValid()}
          type="submit" 
          onClick={() => loginX()}>{getLang('login')}
        </button>

      </form>
      <div>
        <p>User: {user.userid}</p>
        <p>PW: {user.pw}</p>
        <p>Org: {user.org}</p>
        <button type="submit" onClick={() => ping()}>Ping</button>
      </div>
    </>
  )
}

export default Layout
