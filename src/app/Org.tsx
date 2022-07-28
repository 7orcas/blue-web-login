import { useContext } from 'react'
import Select from 'react-select';
import AppContext, { AppContextI } from '../sys/AppContext'
import { OrgI } from '../sys/Interfaces'
import User from '../sys/util/user'
import useLabel from '../sys/util/useLabel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from './Label';

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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select 
                options={ orgs } 
                value={ getValue() }
                onChange={ setOrgX }
                placeholder={ useLabel('org') }
              />
            </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Org
