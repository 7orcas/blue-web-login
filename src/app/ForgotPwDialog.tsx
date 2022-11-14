import { useContext, useState, useEffect, FC } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import forgotPw from '../sys/util/forgotPw'
import Email from './Email'
import Label from './Label'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Button } from '@mui/material';

interface ForgotPwDialogProps {
  setErr : any
  open : boolean
  close : any
}

const ForgotPwDialog : FC<ForgotPwDialogProps> = ({ setErr, open, close }) => {

  const { user } = useContext(AppContext) as AppContextI
  const [ email, setEmail ] = useState('');

  useEffect(() => {
    setEmail(user.userid)
  },[user.userid])

  const handleCommit = () => {
    const put = async () => {
      await forgotPw(email, setErr)
    }
    put()
  };

  return (
    <Dialog open={open}>
      <div className='lang-dialog'>
        <div className='lang-dialog-title'>
          <DialogTitle>
            <Label langkey='passreset' />
          </DialogTitle>
        </div>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='label-field'>
              <Label langkey='email' />
              <Email 
                email={email}
                setEmail={setEmail}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCommit} className='dialog-color dialog-button'>Commit</Button>
          <Button onClick={close} className='dialog-color'>Cancel</Button>
        </DialogActions>
      </div>
      </Dialog>
  )
}

export default ForgotPwDialog
