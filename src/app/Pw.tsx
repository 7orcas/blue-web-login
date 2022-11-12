import React, { useContext, useState } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import User from '../sys/util/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

const Pw = () => {
  
  const { user, setUser } = useContext(AppContext) as AppContextI
  const [showPw, setShowPw] = useState (false)

  const setPwX = (txt : string) => {
    let x = new User(user)
    x.pw = txt
    setUser(x)
  }

  const togglePassword = () => {
    setShowPw(!showPw)
  };

  return (
    <>
      <input 
        className='field'
        onSubmit={(e) => e.preventDefault()}
        type={showPw? 'text' : 'password'}
        value={user.pw}
        onChange={(e) => setPwX(e.target.value)}
      />
      <div className='show-password' onClick={togglePassword}><FontAwesomeIcon icon={showPw? faEyeSlash : faEye } /></div>
    </>
  )
}

export default Pw
