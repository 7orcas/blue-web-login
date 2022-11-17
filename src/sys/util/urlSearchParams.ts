/*
  Initial url can contain flags to alter processing

  [Licence]
  Created May '22
  @author John Stewart
 */

class UrlSearchParams {
  username : string = ''
  pw : string = ''
  lang : string = ''
  orgNr : number = 0
  showOrg : boolean = false
  showAdminPW : boolean = false
  auto : boolean = false
  test : boolean = false
  
  constructor() {
    const url = new URL (window.location.href)
    this.username = this.getParamString(url.searchParams.get("u"))
    this.pw = this.getParamString(url.searchParams.get("p"))
    this.lang = this.getParamString(url.searchParams.get("l"))
    this.orgNr = this.getParamInteger(url.searchParams.get("o"))
    this.showOrg = this.getParamBoolean(url.searchParams.get("org"))
    this.showAdminPW = this.getParamBoolean(url.searchParams.get("admin"))
    this.auto = this.getParamBoolean(url.searchParams.get("auto"))
    this.test = this.getParamBoolean(url.searchParams.get("test"))
  }

  getParamString (p : string | null) : string {
    if (p !== null && typeof p !== 'undefined') return p
    return ''
  }

  getParamBoolean (p : string | null) : boolean {
    if (p !== null && typeof p !== 'undefined') return p.toLowerCase().startsWith('t')
    return false
  }

  getParamInteger (p : string | null) : number {
    if (p !== null && typeof p !== 'undefined') return parseInt(p)
    return -1
  }
}

export default UrlSearchParams
