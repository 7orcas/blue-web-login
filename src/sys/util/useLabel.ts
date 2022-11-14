import { useContext } from 'react'
import AppContext, { AppContextI } from '../AppContext'

const useLabel = (key : string) => {

  const { labels } = useContext(AppContext) as AppContextI

  for (var i=0; i<labels.length; i++) {
    if (labels[i].key === key) {
      return labels[i].label
    }
  }

  //Server message
  if (key !== null && key.length > 0 && key.startsWith('_')) {
    return key.substring(1)
  }

  return key + '?'
}

export default useLabel