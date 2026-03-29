// Helper Imports
import { CookieHelper } from "./cookie.helper"

// Required variables

export class AuthHelper {

    user = import.meta.env.VITE_USERNAME
    pass = import.meta.env.VITE_PASSWORD

    async CheckUserLoggedIn() {
        const status = await CookieHelper.GetCookies('IsLoggedIn')
        return status !== null
    }
}