import React, { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'

const Pw = () => {
  
  const { pw, setPw } = useContext(AppContext) as AppContextI

  return (
    <>
      <input onSubmit={(e) => e.preventDefault()}
        type='text'
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
    </>
  )
}

export default Pw
