import { useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import Lang from './Lang'

const Languages = () => {
  
  const { langs } = useContext(AppContext) as AppContextI

  return (
    <span className='languages'>
      {langs.map((l) => l !== null? <Lang key={l.code} language={l} /> : '')}
    </span>
  )
}

export default Languages
