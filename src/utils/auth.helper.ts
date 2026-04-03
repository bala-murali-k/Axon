// Helper Imports
import { CookieHelper } from "./cookie.helper"

// Required variables

export class AuthHelper {

    user = import.meta.env.VITE_USERNAME
    pass = import.meta.env.VITE_PASSWORD
    auth = import.meta.env.VITE_AUTHKEY

    async CheckUserLoggedIn() {
        const status = await CookieHelper.GetCookies('isLoggedIn')
          console.log('loggedin ', status);
        return status !== null
    }

    CheckUserName (username: string): boolean {
        return username === this.user
    }

    CheckPassword (password: string): boolean {
        return password === this.pass
    }

    StoreLoginInfo () {
        CookieHelper?.SetCookie('isLoggedIn', true, 60 * 60 * 60 * 30)
        CookieHelper?.SetCookie('AuthKey', this.auth, 60 * 60 * 60 * 30)
    }

    ValidateAuthKey() {
        return CookieHelper?.GetCookies('isLoggedIn')?.then(cookie => {
            if (cookie) {
                CookieHelper?.GetCookies('AuthKey')?.then(authKey => {
                    if (authKey === this.auth) {
                        return true
                    }
                })
                return false
            }
            return false
        })
    }
}