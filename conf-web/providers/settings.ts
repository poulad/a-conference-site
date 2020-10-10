
export interface AppSettings {
    CONF_API_BASE_URL: string;
}

export const settings: AppSettings = {
    CONF_API_BASE_URL: "https://a-conference-api.herokuapp.com",
}

let hasLoadedEnvVars = false

/**
 * Load application settings from a ".env" file or environment variables.
 * Invoke this function from server-side code only.
 * @returns A cloned instance of AppSettings for read-only access to environment variables.
 */
export const getAppSettings = () => {
    if (!hasLoadedEnvVars) {
        const dotenv = require("dotenv")
        dotenv.config()

        for (let prop in settings) {
            const envVar = process.env[prop]
            if (envVar?.length > 0) {
                settings[prop] = envVar
            }
        }

        hasLoadedEnvVars = true
    }

    return JSON.parse(JSON.stringify(settings)) as AppSettings
}
