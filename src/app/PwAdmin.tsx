import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import User from '../sys/util/user'

/*
  Admin Password
  Admin can logon as a user 

  [Licence]
  Created 12.11.22
  @author John Stewart
 */
const PwAdmin = () => {
  
  const { user, setUser } = useContext(AppContext) as AppContextI

  const setPwX = (txt : string) => {
    let x = new User(user)
    x.adminPw = txt
    setUser(x)
  }


  return (
    <>
      <input 
        className='field'
        onSubmit={(e) => e.preventDefault()}
        type='password'
        value={user.adminPw}
        onChange={(e) => setPwX(e.target.value)}
      />
    </>
  )
}

export default PwAdmin
