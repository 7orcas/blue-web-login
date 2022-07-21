import { useContext } from 'react'
import AppContext, { AppContextI } from '../AppContext'

const getLang = (key : string) => {

  const { langRepo } = useContext(AppContext) as AppContextI

  for (var i=0; i<langRepo.length; i++) {
    if (langRepo[i].key === key)
      return langRepo[i].label
      
    }
  return key + '?'
}

export default getLang