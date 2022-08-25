import { useContext, FC } from 'react'
import AppContext, { AppContextI } from '../sys/AppContext'
import { LangI } from '../sys/Interfaces'
import User from '../sys/util/user'

interface Props {
  language: LangI
}

const Lang : FC<Props> = ({ language }) => {
  
  const { user, setUser, langs } = useContext(AppContext) as AppContextI

  const getFlag = (l : LangI) : string => {
    if (l === null) return 'united_kingdom_flag.png'
    if (l.code === 'en') return 'united_kingdom_flag.png'
    if (l.code === 'de') return 'germany_flag.png'
    return 'italy_flag.png'
  }

  const getDescr = (l : LangI) : string => {
    if (l === null) return ''
    return l.descr
  }

  //Assign selected lang to user object
  const setLangX = (code : any) => {
    for (var i=0;i<langs.length;i++){
      if (langs[i].code === code){
        let x = new User(user)
        x.lang = langs[i].code
        setUser(x)
console.log('selected lang=' + x.lang)        
        return
      }
    }
  }

  return (
    <span className='flag'>
      <img src={require('./img/' + getFlag(language))} alt={getDescr(language)} onClick={() => setLangX(language.code)}/>
    </span>
  )
}

export default Lang
