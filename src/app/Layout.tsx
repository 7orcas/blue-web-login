import { useContext } from 'react'
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

const Layout = () => {

  const { version, user, setUser, err, setErr, showOrg, showLang, isAuto, isTest } = useContext(AppContext) as AppContextI
  
  const loginX = () => {
    if (!user.isValid()){
      return;
    }

    let x = new User(user)
    x.pw = ''
    setUser(x)
    const attempt = { u: user.userid, p : user.pw, o : user.orgNr, l : user.lang };
    
    if (isTest) {
      setErr(JSON.stringify(attempt))
      return;
    }
    
    login (attempt, setErr)
  }

  if (isAuto) {
    loginX()
  }

  return (
    <>
      <section className='title'>
        <div className='version'>Version {version}</div>
        {useLabel('loginT')}
        {showLang? <Languages /> : ''}
      </section>
      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='label-field'>
            <Label langkey='userid' />
            <UserId />
          </div>
          <div className='label-field'>
            <Label langkey='pw' />
            <Pw />
          </div>
          { showOrg? <div className='label-field'>
            <Label langkey='org' />
            <Org />
          </div> : ''}
          <Button variant="primary"
            className='login-button mb-2'
            disabled={!user.isValid(showOrg, showLang)}
            type="submit" 
            onClick={() => loginX()}>{useLabel('login')}
          </Button>

        </form>
      </section>
      <section>
        <div className='error-message'>
          <Error message={err} />
        </div>
      </section>
    </>
  )
}

export default Layout
