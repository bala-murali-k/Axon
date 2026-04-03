export class CookieHelper {

    static async SetCookie(name: string, value: any, expireTime?: number) {
        try {
            const targetName = name
            const modifiedValue = JSON.stringify(value)
            const expiry = expireTime ? expireTime : 1000 * 5
          console.log('expiry ', expiry);
            await cookieStore.set({
                name: targetName,
                value: modifiedValue,
                expires: expiry,
            })
            console.info(`Cookie ${name} has been added successfully.`)
        }
        catch (error) {
            console.error(`Error setting cookie : ${error}`)
        }
    }

    static async GetCookies(name: string) {
        try {
            return await cookieStore.get(name)
        }
        catch (error) {
            console.error(`Error setting cookie : ${error}`)
        }
        console.info(`Cookie ${name} has been readed successfully.`)
    }

}