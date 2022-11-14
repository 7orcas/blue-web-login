import { useState, FC } from 'react'

interface Props {
  email : string
  setEmail : any
}

const Email: FC<Props>  = ({ email, setEmail }) => {

  const setEmailX = (txt : string) => {
    setEmail(txt)
  }

  return (
    <>
      <input 
        className='field'
        onSubmit={(e) => e.preventDefault()}
        type='text'
        value={email}
        onChange={(e) => setEmailX(e.target.value)}
      />
    </>
  )
}

export default Email
