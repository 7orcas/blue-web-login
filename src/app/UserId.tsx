import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import User from '../sys/util/user'

const UserId = () => {
  
  const { user, setUser } = useContext(AppContext) as AppContextI

  const setUserX = (u : string) => {
    let x = new User(user)
    x.username = u
    setUser(x)
  }

  return (
    <>
      <input 
        className='field'
        onSubmit={(e) => e.preventDefault()}
        type='text'
        value={user.username}
        maxLength={100}
        onChange={(e) => setUserX(e.target.value)}
      />
    </>
  )
}

export default UserId
