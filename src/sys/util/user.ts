
class User {
  userid : string | null = ''
  pw : string | null = ''
  org : number | null = null
  lang : string = 'en'

  constructor(u : User | null) {
    if (u !== null) {
      this.update (u)
    }
  }

  update = (u : User) => {
    this.userid = u.userid
    this.pw = u.pw
    this.org = u.org
    this.lang = u.lang
  }

  setOrgNumber = (o : number | null) => {
    try{
      if (o === null)
        return
      this.org = o
    } catch (err) {}
  }

  setOrgString = (o : string | null) => {
    try{
      if (o === null)
        return
      this.org = parseInt(o)
    } catch (err) {}
  }

  isValid = (showOrg : boolean, showLang : boolean) => {
    if (!this.isValidTest(this.userid)) return false
    if (!this.isValidTest(this.pw)) return false
    if (showLang && (!this.isValidTest(this.lang))) return false
    if (showOrg && this.org === null) return false
    return true
  }

  isValidTest (field : string | null) {
    return field !== null 
      && typeof field !== 'undefined'
      && field.length > 0
  }
}

export default User
