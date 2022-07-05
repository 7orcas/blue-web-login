import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'

const UserId = () => {
  
  const { userid, setUserid } = useContext(AppContext) as AppContextI

  return (
    <>
      <input onSubmit={(e) => e.preventDefault()}
        type='text'
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
      />
    </>
  )
}

export default UserId
