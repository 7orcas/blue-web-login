import { useContext } from 'react'
import Select from 'react-select';
import AppContext, { AppContextI } from '../sys/AppContext'
import { OrgI } from '../sys/Interfaces'
import User from '../sys/util/user'
import useLabel from '../sys/util/useLabel'

const Org = () => {
  
  const { user, setUser, orgs } = useContext(AppContext) as AppContextI

  const setOrgX = (txt : any) => {
    let x = new User(user)
    x.setOrgNumber(txt.value)
    setUser(x)
  }

  //The value prop is handled really bad, and it needs a hack
  //Refer https://stackoverflow.com/questions/43250854/react-select-does-not-show-the-selected-value-in-the-field
  const getValue = () => {
    for (var i=0;i<orgs.length;i++){
      if (orgs[i].value === user.org){
        return {label: orgs[i].label}
      }
    }
    return {}
  }

  const customStyles = {
    control: (provided : any, state : any) => ({
      ...provided,
      borderColor: 'rgb(118,118,118)',
      minWidth: '200px',
      maxWidth: '200px',
      minHeight: '40px',
      maxHeight: '40px',
      textAlign: 'left'
    }),
  };

  return (
    <>
      <Select 
        className="react-select--inline"
        classNamePrefix="react-select"
        styles={ customStyles }
        options={ orgs } 
        value={ getValue() }
        onChange={ setOrgX }
        placeholder={ useLabel('org') }
      />
    </>
  )
}

export default Org
