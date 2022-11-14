import { useContext, useState, useEffect, FC } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import useLabel from '../sys/util/useLabel'
import forgotPw from '../sys/util/forgotPw'
import Email from './Email'
import Label from './Label'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Button } from '@mui/material';


const ForgotPwDialog = () => {

  const { user, setErr } = useContext(AppContext) as AppContextI
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    setEmail(user.userid)
  },[user.userid])

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleCommit = () => {
    const put = async () => {
      await forgotPw(email, setErr)
    }
    put()
    setOpen(false)
  };

  const handleClose = () => {
    setErr('')
    setOpen(false)
  };

  return (
    <>
      <div id='forgot-password' onClick={handleClickOpen}>{useLabel('passforg')}</div>
      <ForgotPwDialogX 
        open={open}
        handleCommit={handleCommit}
        handleClose={handleClose}
        email={email}
        setEmail={setEmail}
        />
    </>
  )
}

export default ForgotPwDialog

interface ForgotPwDialogXProps {
  open: boolean
  handleCommit : any
  handleClose : any
  email : string
  setEmail : any
}

const ForgotPwDialogX : FC<ForgotPwDialogXProps> = ({ open, handleCommit, handleClose, email, setEmail }) => {
  return (
    <Dialog open={open}>
      <div className='forgot-password'>
        <DialogTitle>
          <div className='forgot-password-title'>
            {useLabel('passreset')}
          </div>
        </DialogTitle>
        <DialogContent>
          <div className='label-field'>
            <Label langkey='email' />
            <Email 
              email={email}
              setEmail={setEmail}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCommit} className='forgot-password-button'>{useLabel('commit')}</Button>
          <Button onClick={handleClose} className='forgot-password-button'>{useLabel('cancel')}</Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}

