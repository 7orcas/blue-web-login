class UrlSearchParams {
  baseUrl : string = ''
  overrideUrl : string = ''
  
  constructor() {
    const url = new URL (window.location.href)
    this.baseUrl = url.origin
    this.overrideUrl = this.getParamString(url.searchParams.get("origin"))
  }

  getUrl () : string {
    if (this.overrideUrl !== null && this.overrideUrl.length>0) {
      return this.overrideUrl 
    }
    return this.baseUrl
  }

  getParamString (p : string | null) : string {
    if (p !== null) return p
    return ''
  }

  getParamInteger (p : string | null) : number {
    if (p !== null) return parseInt(p)
    return -1
  }
}

export default UrlSearchParams
