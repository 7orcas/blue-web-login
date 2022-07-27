import { useContext } from 'react'
import Select from 'react-select';
import AppContext, { AppContextI } from '../sys/AppContext'
import { LangI } from '../sys/Interfaces'
import User from '../sys/util/user'
import getLabel from '../sys/util/getLabel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Lang = () => {
  
  const { user, setUser, langs } = useContext(AppContext) as AppContextI

  //Assign selected lang to user object
  const setLangX = (select : any) => {
    for (var i=0;i<langs.length;i++){
      if (langs[i].value === select.value){
        let x = new User(user)
        x.lang = langs[i].label
        setUser(x)
        return
      }
    }
  }

  //The value prop is handled really bad, and it needs a hack
  //Refer https://stackoverflow.com/questions/43250854/react-select-does-not-show-the-selected-value-in-the-field
  const getValue = () => {
    for (var i=0;i<langs.length;i++){
      if (langs[i].label === user.lang){
        return {label: langs[i].value}
      }
    }
    return {}
  }

  //Configure options list to only show language values, ie full name
  const getOptions = () => {
    let langsX = []
    for (var i=0;i<langs.length;i++){
      langsX.push ({label : langs[i].value, value : langs[i].value})
    }
    return langsX
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select 
                options={ getOptions() } 
                value={ getValue() }
                onChange={ setLangX }
                placeholder={ getLabel('lang') }
              />
            </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Lang
