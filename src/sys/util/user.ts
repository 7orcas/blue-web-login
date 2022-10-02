
class User {
  userid : string | null = ''
  pw : string | null = ''
  orgNr : number | null = null
  lang : string = 'en'

  constructor(u : User | null) {
    if (u !== null) {
      this.update (u)
    }
  }

  update = (u : User) => {
    this.userid = u.userid
    this.pw = u.pw
    this.orgNr = u.orgNr
    this.lang = u.lang
  }

  setOrgNumber = (o : number | null) => {
    try{
      if (o === null)
        return
      this.orgNr = o
    } catch (err) {}
  }

  setOrgString = (o : string | null) => {
    try{
      if (o === null)
        return
      this.orgNr = parseInt(o)
    } catch (err) {}
  }

  isValid = (showOrg : boolean, showLang : boolean) => {
    if (!this.isValidTest(this.userid)) return false
    if (!this.isValidTest(this.pw)) return false
    if (showLang && (!this.isValidTest(this.lang))) return false
    if (showOrg && this.orgNr === null) return false
    return true
  }

  isValidTest (field : string | null) {
    return field !== null 
      && typeof field !== 'undefined'
      && field.length > 0
  }
}

export default User
