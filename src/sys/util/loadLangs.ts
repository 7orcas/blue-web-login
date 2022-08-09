import { LangI } from '../Interfaces'
import api from '../api'
import User from './user'
import UrlSearchParams from './urlSearchParams'

const loadLangs = async (user : User, params : UrlSearchParams, setErr : any) => {

  try {
    const response = await api.get(`/lang/languages`, {withCredentials: true})
    const rtn = response.data

    if (!rtn.valid){
      setErr(rtn.message)
      return
    }

    let langs : Array<LangI> = []
    for (const l of rtn.data) {
      langs.push ({code : l.c, descr : l.d, dvalue : l.x})
    }

    //First set default
    langs.forEach((l) => {
      if (l.dvalue === true){
        user.lang = l.code
      }
    })

    //Now test if passed in lang is valid
    langs.forEach((l) => {
      if ('' + l.code === params.lang){
        user.lang = l.code
      }
    })

    return langs

  } catch (err : any) {
    console.log(err.message)

  } finally {


  }
}

export default loadLangs
