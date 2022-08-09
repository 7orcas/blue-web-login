
class User {
  userid : string | null = ''
  pw : string | null = ''
  org : number | null = null
  lang : string | null = ''

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
    if (this.userid === null || this.userid.length === 0) return false
    if (this.pw === null || this.pw.length === 0) return false
    if (showLang && (this.lang === null || this.lang.length === 0)) return false
    if (showOrg && this.org === null) return false
    return true
  }
}

export default User
