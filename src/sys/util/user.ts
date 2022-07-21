
class User {
    userid : string = ''
    pw : string = ''
    org : number = 1

    constructor(u : User | null) {
        if (u !== null) {
            this.update (u)
        }
    }

    update = (u : User) => {
        this.userid = u.userid
        this.pw = u.pw
        this.org = u.org
    }
}

export default User
