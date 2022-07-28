import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import Label from './Label'
import Pw from './Pw'
import Lang from './Lang'
import Org from './Org'
import Error from './Error'
import User from '../sys/util/user'
import UserId from './UserId'
import useLabel from '../sys/util/useLabel'
import login from '../sys/util/login'
import ping from '../sys/util/ping'

const Layout = () => {

  const { user, setUser, err } = useContext(AppContext) as AppContextI
  
  const loginX = () => {
    if (!user.isValid()){
      return;
    }

    let x = new User(user)
    x.pw = ''
    setUser(x)
    const attempt = { u: user.userid, p : user.pw, o : user.org, l : user.lang };
    login (attempt)
  }

  return (
    <>
      <header>
        <h1>{useLabel('loginT')}</h1>
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
            <Label langkey='lang' />
            <Lang />
        </div>
        <div>
            <Label langkey='org' />
            <Org />
        </div>
        <button 
          disabled={!user.isValid()}
          type="submit" 
          onClick={() => loginX()}>{useLabel('login')}
        </button>

      </form>
      <div>
        <Error message={err} />
      </div>
    </>
  )
}

export default Layout
