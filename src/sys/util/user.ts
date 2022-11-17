/*
  User object to return to server

  [Licence]
  Created May '22
  @author John Stewart
 */
class User {
  username : string | null = ''
  pw : string | null = ''
  adminPw : string | null = ''
  orgNr : number | null = null
  lang : string = 'en'

  constructor(u : User | null) {
    if (u !== null) {
      this.update (u)
    }
  }

  update = (u : User) => {
    this.username = u.username
    this.pw = u.pw
    this.adminPw = u.adminPw
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

  isValid = (showOrg : boolean, showLang : boolean, showAdminPw : boolean) => {
    if (!this.isValidTest(this.username)) return false
    if (!showAdminPw && !this.isValidTest(this.pw)) return false
    if (showAdminPw && !this.isValidTest(this.adminPw)) return false
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
