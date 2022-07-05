import React, { useContext } from 'react'
import Label from './Label';
import Pw from './Pw';
import UserId from './UserId';
import AppContext, { AppContextI } from '../sys/AppContext'

const Layout = () => {

  const { userid, pw, login } = useContext(AppContext) as AppContextI

  return (
    <>
      <header>
        <h1>Blue</h1>
      </header>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <Label text='User id' />
            <UserId />
        </div>
        <div>
            <Label text='Password' />
            <Pw />
        </div>
        <button type="submit" onClick={() => login()}>Login</button>
      </form>
      <div>
        <p>{userid}</p>
        <p>{pw}</p>
      </div>
    
    </>
  )
}

export default Layout
