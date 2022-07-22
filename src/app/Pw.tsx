import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import User from '../sys/util/user'

const Pw = () => {
  
  const { user, setUser } = useContext(AppContext) as AppContextI

  const setPwX = (txt : string) => {
    let x = new User(user)
    x.pw = txt
    setUser(x)
  }


  return (
    <>
      <input onSubmit={(e) => e.preventDefault()}
        type='password'
        value={user.pw}
        onChange={(e) => setPwX(e.target.value)}
      />
    </>
  )
}

export default Pw
