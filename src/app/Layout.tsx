import { useContext, useState } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import Label from './Label'
import Pw from './Pw'
import Languages from './Languages'
import Org from './Org'
import Error from './Error'
import User from '../sys/util/user'
import UserId from './UserId'
import useLabel from '../sys/util/useLabel'
import login from '../sys/util/login'
import Button from 'react-bootstrap/Button';
import PwAdmin from './PwAdmin'
import ForgotPwDialog from './ForgotPwDialog'

/*
  Main layout

  [Licence]
  Created May '22
  @author John Stewart
 */
const Layout = () => {

  const { version, user, setUser, err, setErr, showOrg, showLang, showAdminPW, isAuto, isTest } = useContext(AppContext) as AppContextI
  
  const loginX = () => {
    if (!user.isValid()){
      return;
    }

    let x = new User(user)
    x.pw = ''
    setUser(x)
    const attempt = { u: user.username, p : user.pw, a : user.adminPw, o : user.orgNr, l : user.lang };
    
    if (isTest) {
      setErr(JSON.stringify(attempt))
      return;
    }
    
    login (attempt, setErr)
  }

  if (isAuto) {
    loginX()
  }

  const isError = () => {
    return err.length > 0
  }

  return (
    <div className='login-app'>
      <section className='header'>
        {<div className='version'>Version {version}</div>}
        {showLang? <div className='languages'><Languages /></div> : ''}
      </section>
      
      <section className='login'>
        <div className='app-title'>{useLabel('loginT')}</div>
        <div className='app-form'>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='label-field'>
              <Label langkey='username' />
              <UserId />
            </div>
            <div className='label-field'>
              <Label langkey='pw' />
              <Pw />
            </div>
            {showAdminPW? <div className='label-field'>
              <Label langkey='pwAdmin' />
              <PwAdmin />
            </div>: ''}
            { showOrg? <div className='label-field'>
              <Label langkey='org' />
              <Org />
            </div> : ''}

          </form>
        </div>
        <Button variant="primary"
          className='login-button mb-2'
          disabled={!user.isValid(showOrg, showLang, showAdminPW)}
          type="submit" 
          onClick={() => loginX()}>{useLabel('login')}
        </Button>
        <ForgotPwDialog />
      </section>
      
      {isError() && <section className='login-error'>
        <div className='error-message'>
          <Error message={err} />
        </div>
      </section>}

    </div>
  )
}

export default Layout
