import React, { FC, useContext } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'

interface Props {
    langkey: string
}

const Label: FC<Props> = ({ langkey }) => {

  const { lang } = useContext(AppContext) as AppContextI

  const label = (k : string) => {
    for (var i=0; i<lang.length; i++) {
      if (lang[i].key === k)
        return lang[i].label
      
    }
    return k + '?'
  }

  return (
    <>
      {label(langkey)}
    </>
  )
}

export default Label