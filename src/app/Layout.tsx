import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import Label from './Label'
import Pw from './Pw'
import UserId from './UserId'

const Layout = () => {

  const { userid, pw, login, ping } = useContext(AppContext) as AppContextI
  
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
        <button type="submit" onClick={() => login()}>Login</button>
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
